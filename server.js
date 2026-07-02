const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let visitCount = 0;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/visits", (req, res) => {
  visitCount++;
  res.json({ count: visitCount });
});

app.get("/healthz", (req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`jules-sandbox listening on ${PORT}`);
});
