const http = require("http");

const handler = (req, res) => {
  const [_, op, name] = req.url.split("/");
  let evenOdd;

  if (op === "ime") {
    let brojNabukvi = name.length;
    let soglaski = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    let samoglaski = name.match(/[aeiou]/gi);

    if (brojNabukvi % 2 === 0) {
      evenOdd = "parno";
    } else {
      evenOdd = "neparno";
    }

    res.end(
      `karakteri: ${brojNabukvi}, ${evenOdd}, soglaski: ${soglaski.length}, samoglaski: ${samoglaski.length}`
    );
  } else {
    res.end("ok");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
});

/* const http = require("http");

const handler = (req, res) => {
  const [_, op, name] = req.url.split("/");
  let brojNabukvi;
  let evenOdd;
  let soglaski;
  let samoglaski;

  switch (op) {
    case "ime":
      brojNabukvi = name.length;
      evenOdd = brojNabukvi % 2 === 0 ? "parno" : "neparno";
      soglaski = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
      samoglaski = name.match(/[aeiou]/gi);
      res.end(
        `karakteri: ${brojNabukvi}, ${evenOdd}, soglaski: ${soglaski.length}, samoglaski: ${samoglaski.length}`
      );
      break;
    default:
      res.end("ok");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
});
 */

/* const http = require("http");

const handler = (req, res) => {
  const [_, op, name] = req.url.split("/");
  let brojNabukvi;
  let evenOdd;
  let soglaski;
  let samoglaski;

  if (op === "ime") {
    brojNabukvi = name.length;
    soglaski = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    samoglaski = name.match(/[aeiou]/gi);

    if (brojNabukvi % 2 === 0) {
      evenOdd = "parno";
    } else {
      evenOdd = "neparno";
    }

    res.end(
      `karakteri: ${brojNabukvi}, ${evenOdd}, soglaski: ${soglaski.length}, samoglaski: ${samoglaski.length}`
    );
  } else {
    res.end("ok");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */
