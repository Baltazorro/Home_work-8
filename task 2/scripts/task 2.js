if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }

  function getNumberDaysVisitorsLess20(numDays) {
    const daysVisitorsLess20 = [];
    for (let i = 0; i < numDays.length; i++) {
      if (numDays[i] < 20) {
        daysVisitorsLess20.push(i + 1);
      }
    }
    return daysVisitorsLess20;
  }
  function getMinVisitorsDay(numDays) {
    let minValue = Infinity;

    for (let i = 0; i < numDays.length; i++) {
      if (numDays[i] < minValue) {
        minValue = numDays[i];
      }
    }
    const minDays = [];
    for (let j = 0; j < numDays.length; j++) {
      if (numDays[j] === minValue) {
        minDays.push(j + 1);
      }
    }
    return minDays;
  }
  function getMaxVisitorsDay(numDays) {
    let maxValue = 0;
    for (let i = 0; i < numDays.length; i++) {
      if (numDays[i] > maxValue) {
        maxValue = numDays[i];
      }
    }
    const maxDays = [];
    for (let j = 0; j < numDays.length; j++) {
      if (numDays[j] === maxValue) {
        maxDays.push(j + 1);
      }
    }

    return maxDays;
  }
  function getTotalVisitorsWorkingDays(numDays) {
    const onlyWorkingDays = numDays.length - 2;
    totalSum = 0;
    for (let i = 0; i < onlyWorkingDays; i++) {
      totalSum += numDays[i];
    }
    return totalSum;
  }
  function getTotalVisitorsWeekendDays(numDays) {
    totalSum = 0;
    for (let i = 5; i < numDays.length; i++) {
      totalSum += numDays[i];
    }
    return totalSum;
  }
  const numberOfVisitors = [];
  for (let a = 0; a < 7; a++) {
    numberOfVisitors.push(getRandomNumber(1, 100));
  }
  document.write(`Масив відвідувачів протягом тижня = ${numberOfVisitors}<br>
  номери днів, протягом яких кількість відвідувачів була меншою за 20, це дні під номером ${getNumberDaysVisitorsLess20(
    numberOfVisitors
  )}<br>
  номери днів, коли кількість відвідувачів була мінімальною = ${getMinVisitorsDay(
    numberOfVisitors
  )}<br>номери днів, коли кількість відвідувачів була максимальною = ${getMaxVisitorsDay(
    numberOfVisitors
  )} <br>загальна кількість клієнтів у робочі дні = ${getTotalVisitorsWorkingDays(
    numberOfVisitors
  )}<br>загальна кількість клієнтів на вихідних = ${getTotalVisitorsWeekendDays(
    numberOfVisitors
  )}`);
}
