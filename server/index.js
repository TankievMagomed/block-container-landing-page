const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/submit", (req, res) => {
  const data = req.body;

  fs.appendFile("submissions.json", JSON.stringify(data) + "\n", (err) => {
    if (err) {
      res.status(500).json({ message: "Ошибка записи" });
      return;
    }
    res.json({ message: "Сохранено" });
  });
});

app.listen(4000, () => {
  console.log("Сервер запущен на порту 4000");
});
