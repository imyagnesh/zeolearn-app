const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);
console.log(index);
console.log(arr.splice(0, index));
console.log(arr.splice(index + 1));

const newArr = [...arr.splice(0, index)];
