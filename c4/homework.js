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

// Add
(async () => {
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
      console.log("zapisot e uspeshen!");
    })
    .catch((err) => {
      console.log("zapisot e neuspeshen", err);
    });
})();

// Modify
(async () => {
  await new Promise((modify) => {
    studenti = studenti.map((student) => {
      if (student === novStudent) {
        return { ...novStudent, ime: "Anastasija" };
      }
      return student;
    });
    modify();
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
      console.log("zapisot e uspeshen!");
    })
    .catch((err) => {
      console.log("zapisot e neuspeshen", err);
    });
})();

//////////////////////////////////////////////
/* (async () => {
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
})(); */

/////////////////////////////////////////////////////////////////
/* (async () => {
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
})(); */

// (async () => { || async function that is immediately executed. It defines the main body of the program.

// await new Promise((success, fail) => { || This line creates a new Promise object that wraps the async function "fs.readFile()". The await keyword waits for the Promise to resolve before countinuign to the next line.

// fs.readFile(dataFile, (err, studenti) => { || This line uses the "fs" module to read the contents of a file into memory. The "dataFile" variable contains the file path, and the "studenti" variable will hold the contents of the file.

// if (err) return fail(err) || If an error ocurs while reading the file, the Promiseis rejected with the error object.

// try { studenti = JSON.parse(studenti) || The file contents are parsed from a JSON string into a JavaScript object.

// success || If parsing the file contents is successful, the promise is resolved.

// } catch (err) {fail} });); || If parsing the file contents fails, the Promise is rejected with the error object.

// At this point, the file contents have been read and parsed, abd are stored in "studenti" variable.

// studenti.push(novStudent); || A new student object is added to the end of the "studenti" array.

// studenti = studenti.map((student) => {return {...novStudent, ime: "Anastasija"}}  || The "map()" method is called on the "studenti" array to transform each element.

// if(student === novStudent) { || If the current element is the same object as "novStudent", it is replaced with a new object that has the sa,e properties, except for the "ime" property which is set to "Anastasija"

// return student | If the current element is not "novStudent", it is returned unchanged.

// await new Promise((success, fail) => { || This line creates a new Promise object that wraps the async function "fs.writeFile()". The "await" keyword waits for the promise to resolve before continuing to the next line.

// fs.writeFile(dataFile, JSON.stringify(studenti), (err) => { || This line uses the "fs" module to write the updated "studenti" array back to the original file. The "JSON.stringify()" function converts the JavaScript object back into a JSON string before writing.

// if (err) return fail(err); || In af error ocurs while writing the file, the promise is rejected with the error object.

// success(); || If writing the file is successful, the promise is resolved

// console.log("data updated successfully!") // This line prints a message to the console indication that the program has finished.

// })(); || This line immediately executes the async function.

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
