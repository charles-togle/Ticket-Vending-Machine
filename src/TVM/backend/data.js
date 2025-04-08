import express from "express";
import { readFileSync, writeFileSync } from "fs";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

const filepath = "src/TVM/fakedata.json";

app.get("/data", (req, res) => {
  const data = JSON.parse(readFileSync(filepath, "utf-8"));
  res.json(data);
});

app.post("/data", (req, res) => {
  const newData = req.body;
  writeFileSync(filepath, JSON.stringify(newData, null, 2), "utf-8");
  res.json({ message: "JSON updated successfully" });
});

app.get("/:cardID", (req, res) => {
  const { cardID } = req.params;
  const data = JSON.parse(readFileSync(filepath), "utf-8");
  const obj = Object.values(data).find((card) => card.cardID === cardID);

  if (obj) {
    res.json(obj);
  } else {
    res.status(404).json({ message: `Card with id ${cardID} not found` });
  }
});

app.listen(3001, () => {
  console.log("Backend running at http://localhost:3001");
});
