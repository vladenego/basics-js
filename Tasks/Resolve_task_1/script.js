var array = [2, 5, 10];

for (var i = 0; i < array.length; i++) {
  if (array[i] < 5) {
    array[i] = 0;
  }
}

console.log(array);