const { read, write } = require("./io");
const {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
} = require("./students");
/* const read = async () => {
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
}; */

(async () => {
  try {
    await addStudent({
      ime: "Pero",
      prexime: "Perovski",
      godina: 2000,
    });

    let students = await getAllStudents();
    console.log(students);

    await editStudent(0, {
      ime: "Jovan",
      prosek: 8.2,
    });

    students = await getAllStudents();
    console.log(students);

    await deleteStudent(0);

    students = await getAllStudents();
    console.log(first);
  } catch (err) {
    console.log("ERROR", err);
  } finally {
    console.log("END OF CODE!");
  }
})();
