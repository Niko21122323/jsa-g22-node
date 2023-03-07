const http = require("http");

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

/* const http = require("http");

const handler = (req, res) => {
  const [_, route, name] = req.url.split("/");

  switch (route) {
    case "ime":
      if (name && /^[a-z]+$/i.test(name)) {
        const length = name.length;
        res.end(`${name.length}`);
      } else {
        res.end("error!");
      }
      break;
    default:
      res.end("not found");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */

/* const http = require("http");

const handler = (req, res) => {
  switch (route) {
    case "ime":
      break;
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */

// switch (name) {
//   case "ime":
//     bnb = /^[a-z]+$/;
//     res.end(`${bnb.length}`);
//     break;
// }

/* const http = require("http");

const handler = (req, res) => {
  const [_, route, name] = req.url.split("/");

};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */

/* const http = require("http");

const handler = (req, res) => {
  const [_, route, name] = req.url.split("/");

  if (/^[a-z, A-Z]+$/.test(name)) {
    const length = name.length;
    const parity = length % 2 === 0 ? "even" : "odd";
    res.end(`${name.length} ${parity}`);
  } else {
    res.end("not found");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */

/* const http = require("http");

const handler = (req, res) => {
  const [_, route, name] = req.url.split("/");

  switch (route) {
    case "ime":
      if (/^[a-zA-Z]+$/.test(name)) {
        res.end(`${name.length}`);
      } else {
        res.end("Invalid name");
      }
      break;
    default:
      res.end("ok");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
}); */
