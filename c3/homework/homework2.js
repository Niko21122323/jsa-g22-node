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

// 1
const prvaZadaca = studenti
  .filter(
    (student) =>
      student.grad === "Skopje" &&
      student.ime.endsWith("a") &&
      student.prosek > 7
  )
  .sort((a, b) => a.ime.localeCompare(b.ime))
  /*   .sort((a, b) => {
    if (a.prosek < b.prosek) return 1;
    if (a.prosek > b.prosek) return -1;
    if (a.prosek === b.prosek) return 0;
  }) */
  .map((student) => student.ime);

console.log(prvaZadaca);

// Explanation
// Line 1 (const prvaZadaca = studenti)
/* 
    We first declare a new variable (prvaZadaca). We asign in the result of our chain of methods that we'll apply to the "studenti" array.
*/

// Line 2 ( |.filter((student) => student.grad && student.ime.endsWith("a") && student.prosek > 7)| )
/* 
    "filter()" we use it to get a new array that only contains the criteria we want. We pass a callback functionas an argument to "filter()". The call back function takes "student" parameter which represents each object in the "studenti" array. Inside the callback function, we check if the student's city is Skopje, their name ends with "a", and is treater than 7. If all of them are true, the students is included in the filtered array. 
*/

// Line 3 (|.sort((a, b) => a.ime.localeCompare(b.ime))|)
/* 
    We use the "sort()" method to sort the filtered array by alphabetical order of the students names. We pass a callback function as an argument to "sort()". The callback function takes two parametere, "a" and "b", which represents two objects in the filtered array being compared. We use "localCompare()" method on "a.name" and "b.name" to compare the names and return a value that is either (- + or 0) depending on the alphabetical order. The "sort()" method then uses this value to sort the objects in ascending order of their names.
*/

// Line 4 (|.map((student) => student.ime)|)
/* 
    "map()" method is used yo create a new array that only contains the names of the sorted students. We pass a callback fnction as an argument to "map()". The callback function takes a "student" parameter which represents each objects in the sorted array, Inside the callback function, we return only the "student.name" property, which is the name of the student. The resulting array contains the names of the sorted students
*/

// 2
const vtoraZadaca = studenti
  .filter((student) => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);

console.log(vtoraZadaca);

// Ezplanation
/* 
    The first step is to use the "filter()" method to create a new array that contains only the students who have an average over 9 and are not from Skopje. This is achieved by using the arrow function inside the "filter() method."
    The code iterates through each student object in the array and checks if both of these conditions are true, the current student object is included in the new array that is created by the 
    "filter() method".

    Next the "sort()" method is used to sort the students in descending order based on their average. This is achieved by using another arrow function inside the "sort()" method.

    This code compares the average property of two student objects, a and b, and returns a negative number if b.average is greater than a.average, a positive number if a.average is greater than b.average, and 0 if they are equal. This causes the sort() method to sort the student objects in descending order based on their average.
*/

// 3
const tretaVezba = studenti
  .filter((student) => student.ime.length === 5 && student.grad !== "Skopje")
  .sort((a, b) => a.prosek - b.prosek)
  .slice(0, 3);

console.log(tretaVezba);

// Explanation
/* 
    First, we use the "filter()" method to get an array of students who have 5 letters in their name and are not from Skopje. The "filter()" method takes a callback function as an argument, which is executed on each element of the array. The callback function returns true or false, depending on whether the element meets the filtering criteria or not. In this case, we check if the student's name has 5 letters and their city is not Skopje. The "filter()" method returns a new array containing only the elements that pass the filter.

    Next, we use the "sort()" method to sort the filtered array by the students' average grades in ascending order. The "sort()" method takes a comparison function as an argument, which defines the sorting order. In this case, we use a comparison function that subtracts the average property of one element from the average property of another element. This returns a negative value if the first element's average is lower than the second element's average, a positive value if the first element's average is higher than the second element's average, and 0 if the averages are equal. This causes the "sort()" method to sort the array in ascending order based on the students' average grades.

    Finally, we use the "slice()" method to get the first 3 elements of the sorted array. The "slice()" method takes two arguments - the start index and the end index of the slice. In this case, we pass 0 as the start index and 3 as the end index.
*/

// 4
// let set = new Set(studenti.map((s) => s.grad));
let set = [];
for (let i = 0; i < studenti.length; i++) {
  if (!set.includes(studenti[i].grad)) {
    set.push(studenti[i].grad);
  }
}

let res = Array.from(set)
  .map((g) => {
    let sbroj = studenti.filter((s) => s.grad === g).length;
    let svkupno = studenti.reduce((acc, v) => {
      if (v.grad === g) {
        // dali studentot e od odreden grad
        return acc + v.prosek; // go sobirame prosekot so prosecite na studentite od istiot grad
      }
      return acc; // vrati ja prethodnata sostojba
    }, 0);
    return {
      grad: g,
      prosek: svkupno / sbroj,
    };
  })
  .sort((a, b) => {
    if (a.prosek > b.prosek) return -1;
    if (a.prosek < b.prosek) return 1;
    if (a.prosek == b.prosek) return 0;
  });

console.log(res);
