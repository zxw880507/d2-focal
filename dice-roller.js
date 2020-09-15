// create a function named rollTimes to get the rolling times
const rollTimes = function() {
  return process.argv.slice(2)[0];
};
// create a function that produces times of random numbers from 1 - 6
const rollNum = function(times) {
  let array = [];
  for (let i = 0; i < times; i++) {
    array.push(Math.floor(Math.random() * 6) + 1);
  }
  return array.join(', ');
};
const timesNum = rollTimes();

console.log(`Rolled ${timesNum} dice: ${rollNum(timesNum)}`);