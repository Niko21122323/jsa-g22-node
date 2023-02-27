// student [ime, prezime, prosek, grad]
// CRUD
// додавање на студент во фајлот
// бришење на студент од фајлот
// менување на податоци на студент од фајлот
// читање на сите студенти од фајлот

// - треба да додадеме студент во фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. треба да ги додадете податоците на студентот во низата | Array.push
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

// - Името на студентот треба да биде сменето од ААА во ААБ
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа/објект | JSON.parse
// 3. да ги измините сите елементи во низата и да направите промена само на соодветниот член | Array.map
// 4. низата од js низа/објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

// - треба да се избрише студент од фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. да ги измините сите елементи во низата и да го избришете само соодветниот член | Array.filter
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

/*
(async () => {
    let students = await getAllStudent();
    console.log(students);
    // додавање
    await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});
    let students = await getAllStudent();
    console.log(students); // да го има Pero во листата

    // модификација
    await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});
    let students = await getAllStudent();
    console.log(students); // да биде сменет просекот на Pero
    
    // бришење
    await deleteStudent(0);
    let students = await getAllStudent();
    console.log(students); // Pero да го нема во листата
})();
*/
import fs from "fs";
const readline = require("readline");

const students = [
  { name: "Bojan", average: 7.5, city: "Skopje" },
  { name: "Pero", average: 8.3, city: "Bitola" },
  { name: "Janko", average: 6.9, city: "Kumanovo" },
  { name: "Vesna", average: 9.2, city: "Tetovo" },
  { name: "Elena", average: 9.9, city: "Ohrid" },
  { name: "Ivana", average: 6.9, city: "Kumanovo" },
  { name: "Natasha", average: 8.1, city: "Skopje" },
  { name: "Stanko", average: 7.2, city: "Strumica" },
];

(async () => {
  const dataFile = "data.json";
  const students = [];
  const novStudent = { name: "Ana", average: 9.5, city: "Ohrid" };
  await new Promise((dodavanje) => {
    students.push(novStudent);
    dodavanje();
  });

  const fileWrite = (dataFile, students) => {
    return new Promise((success, fail) => {
      fs.writeFile(dataFile, JSON.stringify(students), (err) => {
        if (err) return fail(err);
        return success();
      });
    });
  };

  fileWrite(dataFile, students)
    .then(() => {
      console.log("zapisot e uspeshen! (vo nov file)");
    })
    .catch((err) => {
      console.log(err);
    });
})();
