const fs = require("fs");

const read = async () => {
  // funkcija so koja cidatme od file
  return new Promise((success, fail) => {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) return fail(err);
      data = JSON.parse(data);
      return success(data);
    });
  });
};

const write = async (data) => {
  return new Promise((success, fail) => {
    data = JSON.stringify(data);
    fs.writeFile("data.json", data, (err) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

module.exports = {
  //exporting functions
  read,
  write,
};
