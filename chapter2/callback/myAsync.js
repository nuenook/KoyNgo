console.log('1');
myAsyncFunc(callbackFunc);
console.log('2');
function myAsyncFunc (callback) {
  console.log('3');
  callback();
  console.log('4');
}

console.log('5');
function callbackFunc () {
  console.log('6');
  console.log('this is callback function');
  console.log('7');
}