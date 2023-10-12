/** Given a sorted array and a number, write a function called sortedFrequency
 * that counts the occurrences of the number in the array */

// Brute force approach
function bruteFrequency(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// [2, 2, 2, 2, 2, 2, 2, 2, 2]

// I won't always have a single function; sometimes you need helpers
// This is split so you find the first and the last
// Finish this tomorrow
function sortedFrequency(arr, num) {}

// I need to check everything carefully
// One small mistake will sink the whole thing
function findLast(arr, num, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, left, mid - 1);
    } else {
      return findLast(arr, num, mid + 1, right);
    }
  }
  return -1;
}

// Recursion
// We hold temporary values in the parameters
// And use moving pointers
function findFirst(arr, num, left = 0, right = arr.length - 1) {
    if (right >= left) {
      let mid = Math.floor((left + right) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, right)
      } else {
        return findFirst(arr, num, left, mid - 1)
      }
    }
    return -1
  }
  
  // [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // this is a recusive function
  // if mid is at the zero index or it's bigger than the one to the left
  // and if arr[mid] is num, return it
  // otherwise, if num is bigger than arr[mid], set left to mid + 1
  // if num is less than arr[mid], set right to mid - 1
  