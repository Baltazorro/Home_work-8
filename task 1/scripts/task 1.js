if (confirm("Почати тестування?")) {
  let numberOfSubject = parseInt(prompt("Введіть кількість предметів", "5"));
  const assessmentsSubjects = [];
  for (let i = 1; i <= numberOfSubject; i++) {
    let assesstmentValue = parseInt(
      prompt(`Введіть оцінку з ${i}-го предмету`)
    );
    assessmentsSubjects.push(assesstmentValue);
  }
  function averageValue(assessmentsSubjects) {
    let sum = 0;
    for (let a = 0; a < assessmentsSubjects.length; a++) {
      sum += assessmentsSubjects[a];
    }
    let averageValue = sum / assessmentsSubjects.length;
    return averageValue;
  }

  let minValue = assessmentsSubjects[0];
  for (let j = 1; j < assessmentsSubjects.length; j++) {
    if (assessmentsSubjects[j] < minValue) minValue = assessmentsSubjects[j];
  }
  let category;
  switch (minValue) {
    case 1:
    case 2:
      category = "Двійочник";

      break;
    case 3:
      category = "Трійочник";
      break;
    case 4:
      category = "Хорошист";
      break;
    case 5:
      category = "Відмінник";
      break;
  }
  document.write(
    `Середній бал=${averageValue(
      assessmentsSubjects
    )}<br>Категорія учня=${category}`
  );
}
