const test = require('node:test');
const assert = require('node:assert');
const { spawn } = require('node:child_process');

test('GET /api/visits increments and returns JSON count', async (t) => {
  const port = 3002;
  const server = spawn('node', ['server.js'], {
    env: { ...process.env, PORT: port }
  });

  await new Promise((resolve, reject) => {
    const onData = (data) => {
      if (data.toString().includes('listening on')) {
        server.stdout.removeListener('data', onData);
        resolve();
      }
    };
    server.stdout.on('data', onData);
    server.on('error', (err) => {
      console.error('Server spawn error:', err);
      reject(err);
    });
    // Timeout if server doesn't start
    const timeout = setTimeout(() => reject(new Error('Server start timeout')), 5000);
    server.on('exit', () => clearTimeout(timeout));
  });

  try {
    const res1 = await fetch(`http://localhost:${port}/api/visits`);
    assert.strictEqual(res1.status, 200);
    const data1 = await res1.json();
    const initialCount = data1.count;

    const res2 = await fetch(`http://localhost:${port}/api/visits`);
    assert.strictEqual(res2.status, 200);
    const data2 = await res2.json();
    assert.strictEqual(data2.count, initialCount + 1);
  } finally {
    server.kill();
    await new Promise(resolve => server.on('exit', resolve));
  }
});
