/** Divide and Conquer */

function binarySearch(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleVal = arr[middleIndex];

    if (middleVal === val) {
      return val;
    } else if (middleVal < val) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

/** The main thing I learned here is to be careful about how you use the 
 * while statement; you want the indices to eventually converge to be the same
 * if the value is not present, so you must use <=. Also, adding indices 
 * together and dividing by 2 will give you the middle point.
 */

// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 100)
// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], -1)
// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5)
