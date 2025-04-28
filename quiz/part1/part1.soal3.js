function cariMedian(arr) {
  arr.sort((a, b) => a - b); 
  let midIndex = Math.floor(arr.length / 2);
  let value1 = arr[midIndex];
  /* $$$$$$$$$$$ */
   if (arr.length % 2 !== 0) {
    return value1
   } else {
    let midIndex2 = midIndex - 1;
    let midIndex3 = midIndex;
    let value2 = (arr[midIndex2] + arr[midIndex3]) / 2;
    return value2
   }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
