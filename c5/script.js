const fs = require("fs");

const dumbFunction = () => {
  // ...
  //  throw "AN ERROR HAPPENDED!";
  try {
    // ...
  } catch (err) {}
};

const readFile = (file) => {
  return new Promise((success, fail) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return fail({ error: "FILE_FAILED", message: err });
      }
      return success(data);
    });
  });
};

(async () => {
  try {
    // kod koj sto sakame da se izvrshi
    dumbFunction();
    // readFile("pero.txt");
    await readFile("pero.txt");
  } catch (error) {
    // console.log("error!!!", err);
    switch (error.error) {
      case "DUMB_FAILED":
        console.log("dumb failed...");
        break;
      case "FILE_FAILED":
        console.log("file failed...");
        break;
      default:
        console.log("something else failed...");
        break;
    }
  }
})();
