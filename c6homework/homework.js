const http = require("http");

const handler = (req, res) => {
  const [_, op, name] = req.url.split("/");
  let evenOdd;

  if (op === "ime") {
    const brojNabukvi = name.length;
    const soglaski = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const samoglaski = name.match(/[aeiou]/gi);

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
