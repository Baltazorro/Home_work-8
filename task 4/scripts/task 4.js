if (confirm("Почати тестування?")) {
  function getCarsNumWhithFirstA(carsNumbers, firstLetterA) {
    count = 0;
    for (let i = 0; i < carsNumbers.length; i++) {
      if (carsNumbers[i][0] === firstLetterA) count++;
    }
    return count;
  }

  function getCarsNumFirstAndLastLetterMatch(carsNumbers) {
    count = 0;
    for (let i = 0; i < carsNumbers.length; i++) {
      if (
        carsNumbers[i][0] === carsNumbers[i].charAt(carsNumbers[i].length - 1)
      )
        count++;
    }
    return count;
  }

  function getCarsNumMoreFiveLetters(carsNumbers) {
    count = 0;
    for (let i = 0; i < carsNumbers.length; i++) {
      if (carsNumbers[i].length > 5) count++;
    }
    return count;
  }
  let carsNumbers = [
    "AB3452BA",
    "AT2233VA",
    "KA7293KA",
    "J234J",
    "AA3272BB",
    "BA43PAB",
  ];

  let firstLetterA = "A";
  document.write(`Номера машин = ${carsNumbers}<br>
    Номера з першою літерою А = ${getCarsNumWhithFirstA(
      carsNumbers,
      firstLetterA
    )}<br>
    Номерів в яких перша і остання літери співпадають = ${getCarsNumFirstAndLastLetterMatch(
      carsNumbers
    )}<br>
    Номерів які складаються з більш ніж 5 символів = ${getCarsNumMoreFiveLetters(
      carsNumbers
    )} `);
}
