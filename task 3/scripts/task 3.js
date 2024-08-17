if (confirm("Почати тестування?")) {
  let totalNames = parseInt(prompt("Скільки бажаєте ввести імен ?"));
  const nameStudents = [];
  for (let index = 1; index <= totalNames; index++) {
    let name = prompt(`Введіть імя ${index} `, `Ivan`);
    nameStudents.push(name);
  }
  let count = 0;
  for (let i = 0; i < nameStudents.length; i++) {
    if (nameStudents[i] === "Ivan") {
      count++;
    }
  }
  document.write(`${nameStudents}<br>імя Іван зустрічається ${count} разів`);
}
