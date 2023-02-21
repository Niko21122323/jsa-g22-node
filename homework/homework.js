// HOMEWORK \\

// fs function 1
const fs = require("fs");

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile("homework.txt", "First Homework", (err) => {
      if (err) {
        return fail(err);
      } else {
        return success();
      }
    });
  });
};

fileWrite("homeowrk.txt", "First Homework")
  .then(() => {
    console.log("file written successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// with async and await
/* async () => {
  try {
    await fileWrite("homework.txt", "First Homework");
  } catch (err) {
    console.log(err);
  }
}; */

// fs function 2 (with .stat)
function getFileStats(path) {
  return new Promise((resolve, reject) => {
    fs.stat("fs-function.txt", (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}

getFileStats("fs-function.txt")
  .then((stats) => {
    console.log(stats);
  })
  .catch((err) => {
    console.error(err);
  });

// fs function 3 ( with .copyFile)
function copyFile(sourcePath, destPath) {
  return new Promise((resolve, reject) => {
    fs.copyFile("./fs-function.txt", "./c2.txt", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/* copyFile("./fs-function.txt", "./c2.txt")
  .then(() => {
    console.log("File copied successfully!");
  })
  .catch((err) => {
    console.error("Error copying file:", err);
  }); */

async () => {
  try {
    await copyFile("./fs-function.txt", "./c2.txt");
    console.log("file copie successfully");
  } catch (err) {
    console.log("error copying file", err);
  }
};
