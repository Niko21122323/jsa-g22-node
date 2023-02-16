const fs = require("fs"); // vcituvanje na paket/modul za rabota so filesystem - fajlovi i direktoriumi

/* fs.writeFile(
  "data.txt", // fajlot kade ke se zapishe
  "Hello World! node... :(", // sto ke bide zapishano vo fajlot
  (err) => {
    // funkcijata koja ke se izvrshi otkako ke zavrshi zapisot
    if (err) return console.log(err);
    console.log("zapisot e napraven");
  }
); */

fs.writeFile("data.txt", "Hello World! node... :(", (err) => {
  if (err) return console.log(err);
  console.log("zapisot e napraven");
});

// Promise

/* 
// Step 1 (define an empty function)
const fileWrite = () => {

}; 
*/

/* 
// Step 2 (add new Promise)
const fileWrite = () => {
  return new Promise();
}; 
*/

/* 
// Step 3
const fileWrite = () => {
  return new Promise(() => {

  });
};  
*/

/* 
// Step 4 (add success and fail)
const fileWrite = () => {
  return new Promise((success, fail) => {

  });
}; 
*/

/* 
// Step 5
const fileWrite = () => {
  return new Promise((success, fail) => {
    fs.writeFile("data.txt", "Hello World! node... :(", (err) => {
      if (err) return console.log(err);
      console.log("zapisot e napraven");
    });
  });
}; 
*/

/* 
// Step 6
const fileWrite = () => {
  return new Promise((success, fail) => {
    fs.writeFile("data.txt", "Hello World! node... :(", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
}; 
*/

// Step 7
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile("filename", data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

fileWrite("data1.txt", "hov file so zapis od promis")
  .then(() => {
    console.log("zapisot e uspeshen! (vo nov file)");
  })
  .catch((err) => {
    console.log(err);
  });

// Najnova varijanta (gornoto poednostavno so asinc i await)
(async () => {
  try {
    await fileWrite("data1.txt", "hov file so zapis od promis"); // se povikuvaat kolku sakas funkcii so imaat promisi
  } catch (err) {
    console.log(err);
  }
})();

/* const main = async () = {
      try {
    await fileWrite("data1.txt", "hov file so zapis od promis"); // se povikuvaat kolku sakas funkcii so imaat promisi
  } catch (err){
    console.log(err);
  }
}; */

// ZA DOMASNO
// da se odberat dve fs functions koi rabotat so callback istite da gi prepiseme da rabotat so promise
