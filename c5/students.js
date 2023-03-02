const getAllStudents = async () => {
  return read();
};

const addStudent = async (studentData) => {
  let students = await read();
  students.push(studentData);
  await write(students);
};

const deleteStudent = async (studetIndex) => {
  let students = await read();
  students = students.filter((s, i) => i !== studetIndex);
  await write(students);
};

const editStudent = async (studetIndex, studentData) => {
  let students = await read();
  students = students.map((s, i) => {
    if (i === studetIndex) {
      return {
        ...s, // spread operator gi kopira vrednostite od objektot s i posle gi kopira site vrednosti od studenti
        ...studentData,
      };
    }
    return s;
  });
  await write(students);
};

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
};
