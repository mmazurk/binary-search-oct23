/** Divide and Conquer */

// Note, this isn't a "perfect" solution because I am learning.
// I can come back and refactor this

// this takes a sorted array and checks if a value is in it
// if the value is there it returns the value
// otherwise it returns -1

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 100 => -1
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], -1 => -1
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5 => 5

function binarySearch(arr, val) {

    // set your initial values first

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // this is redundant as you already compute this inside the loop
    // it needs refactoring 
    let middleIndex = Math.floor(arr.length / 2);

    // to refactor, move the computation to the beginning of the loop
    // middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    // then you can do your checking

    // other stuff I learned ...
    // -------------------------
    // You have to let the left and right index converge into one in this problem
    // that way left, right, middle can be the same index
    // this is because of the math you do on middleIndex
    // if leftIndex and rightIndex are both 5 then middleIndex is also 5
    // and it will have found the value
    // that's why you need leftIndex <= right Index
    // if you say leftIndex < rightIndex it never will find the value
    
    while (leftIndex <= rightIndex) {
        if (arr[middleIndex] === val) {
            return val;
        }
        if (arr[middleIndex] < val) {
            leftIndex = middleIndex + 1;
        }
        if (arr[middleIndex] > val) {
            rightIndex = middleIndex - 1;
        }

        // indices are always ordered so you can do math like this
        middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    }
    return -1; 
}

// test cases
// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 100)
// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], -1)
// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5)