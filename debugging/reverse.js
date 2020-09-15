let input = process.argv[2];

if (input) {
  console.log(reverse(input));
}

function reverse(original) {
  let output = [];
  let arr = original.split('');
  for (let char of arr) {
    output.unshift(char);
  }
  return output.join('');
}