if (confirm("Почати тестування?")) {
  function getRamdomScore(minScore, maxScore) {
    return minScore + Math.floor(Math.random() * (maxScore - minScore + 1));
  }

  function getNumberOfTwo(numbers) {
    let numberLooking = 2;
    let count = 0;

    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] === numberLooking) count++;
    }
    return count;
  }
  function getNumberGoodScores(numbers) {
    let numberLooking = 4;
    let numberLooking2 = 5;
    let count = 0;

    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] === numberLooking || numbers[index] === numberLooking2)
        count++;
    }
    return count;
  }
  function getNumberBelowAverage(numbers) {
    let averageScore = 4;
    let count = 0;
    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] < averageScore) count++;
    }
    return count;
  }

  let numberOfScores = parseInt(prompt("Введіть кількість оцінок", "5"));
  const scoresPupil = [];
  for (let i = 0; i < numberOfScores; i++) {
    scoresPupil.push(getRamdomScore(1, 5));
  }

  document.write(`Масив оцінок = ${scoresPupil}<br>
   Кількість двійок = ${getNumberOfTwo(scoresPupil)}<br>
   Кількість хороших оцінок = ${getNumberGoodScores(scoresPupil)}<br>
   Кількість оцінок, які нижче середнього = ${getNumberBelowAverage(
     scoresPupil
   )}  `);
}
