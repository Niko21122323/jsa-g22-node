const http = require("http");

const handler = (req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers["user-agent"]);
  //   console.log("hello from server");

  //   let path = req.url;

  //   res.end(`Hello from path: ${path}`);

  const [_, op, a, b] = req.url.split("/");
  console.log(op, a, b);
  let o;

  switch (op) {
    case "sobiranje":
      o = Number(a) + Number(b);
      res.end(`${o}`);
      break;
    case "odzemanje":
      o = a - b;
      res.end(`${o}`);
      break;
    case "delenje":
      o = a / b;
      res.end(`${o}`);
      break;
    case "mnozenje":
      o = a * b;
      res.end(`${o}`);
      break;
    default:
      res.end("OK");
  }

  res.end("OK");
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
});

/* 
/sobiranje/2/5 -> 7
/odzemanje/6/9 -> -3
/mnozenje/3/9 -> 27
/delenje/4/2 -> 2

split


// Za doma

// servis koj ke obrabotuva ruti od sledniot tip

// /ime/bojan
// /ime/pero
// /ime/aleksandra
// /ime/jovana
// /ime/stanko
// /ime/ivana
// /ime/goran

// parno: da, karakteri:5, soglaski: 2, samoglaski:3

//////////////////////////////////////
/* const http = require("http");

const handler = (req, res) => {
  const [_, route, name] = req.url.split("/");
  let ime;

  switch (route) {
    case "ime":
      if ((name = /^[a-z]+$/.test(name))) {
        res.end(`${name.length}`);
      } else {
        res.end("error!");
      }
      if (name.length % 2 === 0) {
        res.end();
      } else {
        res.end();
      }
    default:
      res.end("not found");
    //     case "ime":
    //   ime = /^[a-z]+$/.test(name);
    //   res.end(ime.toString());
    //   break;
    // default:
    //   res.end("not found");
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
      if (/^[a-z]+$/.test(name)) {
        const length = name.length;
        const parity = length % 2 === 0 ? "even" : "odd";
        res.end(`${length} ${parity}`);
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
});
 */
