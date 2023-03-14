const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/text", async (req, res) => {
  try {
    let output = await parseTemplate("index_form", {});
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
});

app.post("/text", async (req, res) => {
  if (!req.body.textArea) {
    return res.status(400).send("bad request");
  }

  const text = req.body.textArea;
  const numCharacters = text.length;
  const numWords = text.split(" ").length;

  try {
    let output = await parseTemplate("index", { numCharacters, numWords });
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
});

const parseTemplate = async (template, data) => {
  return new Promise((success, fail) => {
    fs.readFile(
      `${__dirname}/views/${template}.html`,
      "utf8",
      (err, content) => {
        if (err) {
          return fail(err);
        }
        content = content.replace("{{numCharacters}}", data.numCharacters);
        content = content.replace("{{numWords}}", data.numWords);
        content = content.replace("{{data}}", data);
        return success(content);
      }
    );
  });
};

app.listen(1000, (err) => {
  if (err) return console.log(err);
  console.log("Server started!");
});
