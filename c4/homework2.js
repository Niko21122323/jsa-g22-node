import fs, { readFile } from "fs";
//const fs = require("fs");
const encoding = "utf8";

let studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.2, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

const dataFile = "data.json";
const novStudent = { ime: "Ana", prosek: 9.5, grad: "Ohrid" };

(async () => {
  // Read existing data from file
  await new Promise((success, fail) => {
    fs.readFile(dataFile, (err, studenti) => {
      if (err) return fail(err);
      try {
        studenti = JSON.parse(studenti);
        success();
      } catch (err) {
        fail(err);
      }
    });
  });
  // Add novStudent
  studenti.push(novStudent);
  // Write updated data back to file
  await new Promise((success, fail) => {
    fs.writeFile(dataFile, JSON.stringify(studenti), (err) => {
      if (err) return fail(err);
      success();
    });
  });

  console.log("Data updated successfully!");
})();

(async () => {
  // Read existing data from file
  await new Promise((success, fail) => {
    fs.readFile(dataFile, (err, studenti) => {
      if (err) return fail(err);
      try {
        studenti = JSON.parse(studenti);
        success();
      } catch (err) {
        fail(err);
      }
    });
  });
  // Modify novStudent
  studenti = studenti.map((student) => {
    if (student === novStudent) {
      return { ...novStudent, ime: "Anastasija" };
    }
    return student;
  });
  // Write updated data back to file
  await new Promise((success, fail) => {
    fs.writeFile(dataFile, JSON.stringify(studenti), (err) => {
      if (err) return fail(err);
      success();
    });
  });

  console.log("Data updated successfully!");
})();
