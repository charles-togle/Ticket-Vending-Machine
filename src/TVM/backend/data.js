import express from "express";
import { readFileSync, writeFileSync } from "fs";
import cors from "cors";
import { promises as fsPromises } from "fs";

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

app.get("/:cardID", (req, res) => {
  const { cardID } = req.params;
  const data = JSON.parse(readFileSync(filepath), "utf-8");
  const card = Object.values(data).find((card) => card.cardID === cardID);

  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: `Card with id ${cardID} not found` });
  }
});

app.post("/:cardID", async (req, res) => {
  const { cardID } = req.params;
  const updatedData = req.body;

  try {
    const data = JSON.parse(await fsPromises.readFile(filepath, "utf-8"));
    const card = Object.values(data).find((card) => card.cardID === cardID);

    if (card) {
      Object.assign(card, updatedData);
      await fsPromises.writeFile(
        filepath,
        JSON.stringify(data, null, 2),
        "utf-8"
      );
      res.json({ message: "Card updated successfully", updatedCard: card });
    } else {
      res.status(404).json({ message: `Card with id ${cardID} not found` });
    }
  } catch (error) {
    console.error("Error reading or writing file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("Backend running at http://localhost:3001");
});
