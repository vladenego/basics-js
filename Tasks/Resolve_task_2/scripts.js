var array = [2, 4, 7, 10, -3, 8, 6, 1];

var newArray = [];

for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    newArray.push(array[i]);
  }
}

console.log(newArray);