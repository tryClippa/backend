import express from "express";

const app = express();
app.use(express.json({ limit: "2mb" }));

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/ingest", (req, res) => {
  // For now, just prove Base44 can reach your backend
  res.status(202).json({ ok: true, received: req.body || {} });
});

const port = process.env.PORT || 10000;
app.listen(port, "0.0.0.0", () => console.log("Listening on", port));
