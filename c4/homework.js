import fs, { readFile } from "fs";
//const fs = require("fs");
const filePath = "data.json";
const encoding = "utf8";

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.2, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

(async () => {
  const dataFile = "data.json";
  const novStudent = { name: "Ana", prosek: 9.5, grad: "Ohrid" };

  await new Promise((add) => {
    studenti.push(novStudent);
    add();
  });

  const fileWrite = (dataFile, studenti) => {
    return new Promise((success, fail) => {
      fs.writeFile(dataFile, JSON.stringify(studenti), (err) => {
        if (err) return fail(err);
        return success;
      });
    });
  };

  fileWrite(dataFile, studenti)
    .then(() => {
      console.log("zapisot e uspeshen! (vo nov file)");
    })
    .catch((err) => {
      console.log("zapisot e neuspeshen", err);
    });
})();

/* (async () => {
  const dataFile = "data.json";
  const novStudent = { name: "Ana", prosek: 9.5, grad: "Ohrid" };

  const dodavanjeStudent = (dataFile, novStudent) => {
    return new Promise((success, fail) => {
      studenti.push(novStudent, dataFile, (err) => {
        if (err) return fail(err);
        return success();
      });
    });
  };

  dodavanjeStudent(novStudent);

  const fileWrite = (dataFile, studenti) => {
    return new Promise((succes, fail) => {
      fs.writeFile(dataFile, JSON.stringify(studenti), (err) => {
        if (err) return fail(err);
        return succes();
      });
    });
  };

  fileWrite(dataFile, studenti)
    .then(() => {
      console.log("success!");
    })
    .catch((err) => {
      console.log(err);
    });
})(); */

/* (async () => {
  const dataFile = "data.json";
  const novStudent = { name: "Ana", prosek: 9.5, grad: "Ohrid" };

  const fileRead = (dataFile) => {
    return fs
      .readFile("dataFile", "encoding")
      .then((data) => JSON.parse(data))
      .catch((err) => console.error(err));
  };

  const dodavanjeStudent = (dataFile, novStudent) => {
    return fileRead(dataFile).then((studenti) => {
      studenti.push(novStudent);
      return fs.writeFile(dataFile, JSON.stringify(studenti));
    });
  };

  await dodavanjeStudent(dataFile, novStudent);
  console.log("success!");
})(); */
