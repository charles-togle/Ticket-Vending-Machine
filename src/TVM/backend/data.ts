import express from "express";
import { readFileSync, writeFileSync } from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const filepath = "../fakedata.json";
app.get("/data", (req, res) => {
  const data = JSON.parse(readFileSync(filepath, "utf-8"));
  res.json(data);
});

app.post("/data", (req, res) => {
  const newData = req.body;
  writeFileSync(filepath, JSON.stringify(newData, null, 2), "utf-8");
  res.json({ message: "JSON updated successfully" });
});

app.listen(3005, () => {
  console.log("Backend running at http://localhost:3005");
});
