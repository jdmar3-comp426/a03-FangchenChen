/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
 export function getMedian(array) {
    array.sort();
    if (array.length%2==1){
        return array[(array.length-1)/2];
    }
    else {
        return (array[array.length/2-1]+array[array.length/2])/2;
    }
}
let array = [1,2,3,4,5];
console.log(getMedian(array));