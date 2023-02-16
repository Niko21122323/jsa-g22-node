// funkcija 1 pravi konverzija od C vo F
// funkcija 1 pravi konverzija od F vo C

const c2f = (c) => {
  return c * 1.8 + 32;
};

const f2c = (f) => {
  console.log(((f - 32) * 5) / 9);
};

let res1 = c2f(12);
console.log(res1);

f2c(100);

const fun = (parm, c) => {
  let r = parm(c) + 100;
  return r;
};

let res = fun(f2c, 12);
console.log("FUN:", res);

// console.log("FUN", fun(c2f, 12));

// const handler = (e) => {
//   console.log(e);
// };

// el.addEventListener("click", handler);
// el.addEventListener("click", (e) => {
//   console.log(e);
// });
