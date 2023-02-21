/* 
C - create
R - read
U - update
D - delete 
*/

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.2, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// forEach, map, reduce, sort, filter, find

// forEach
/* function imeNaStudenti(studenti) {
  studenti.forEach((student) => console.log(student.ime));
}
imeNaStudenti(studenti); */

// map
/* const name = studenti.map((s) => {
  return s.ime;
});
console.log(name); */

// reduce
/* let ocenki = studenti.reduce((acc, s) => {
  return acc + s.prosek;
}, 0);
console.log(ocenki);
console.log(ocenki / studenti.length); */

// sort
/* studenti.sort((a, b) => {
  if (a.prosek < b.prosek) {
    return 1;
  }
  if (a.prosek > b.prosek) {
    return -1;
  }
  return 0;
});
console.log(studenti);

studenti.sort((a, b) => {
  if (a.ime.toLowerCase() > b.ime.toLowerCase()) return 1;
  if (a.ime.toLowerCase() < b.ime.toLowerCase()) return -1;
  return0;
});
console.log(studenti); */

// filter
/* let studentiFilter = studenti.filter((s) => {
  // return s.ime === "Pero";
  return s.ime.endsWith("o");
  //return s.prosek > 0;
});
console.log(studentiFilter); */

// find (vraka element od nizata od postaveniot uslov)
/* let studentiFind = studenti.find((s) => {
  return s.ime === "Pero";
});
console.log(studentiFind); */

// Za doma
// 1. Site studenti od Skopje cie ime zavrsuva na a imaat prosek nad 7, podredeni po ime (rastecki)
// 2. Site studentio so prosek nad 9 i ne se od Skopje, podredeni po prosek (opagacki)
// 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni  po prosek
// 4. Gradovi podredeni po grupna visina na prosek
// 5. Vkupen prosek na studenti cie ime zavrsuva na a nasproti site ostanati
