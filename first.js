function frankenSplice(arr1, arr2, n) {
  let frankenArr = arr2.slice();
  frankenArr.splice(n, 0, ...arr1);
  return frankenArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));