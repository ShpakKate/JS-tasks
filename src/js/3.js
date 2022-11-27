const number = prompt("Еnter the number greater than 1:",'');
const array = [];
let n = 0;
for (let i = 1; i <= number; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
        array[n] = i;
        n = n + 1; 
    }
  } 
} alert(array);