/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
 export function maxAndMin(numbers) {
    var mymin = Math.min(...numbers);
    var mymax = Math.max(...numbers);
    var rtn = {min:mymin, max:mymax};
    return rtn;
}
console.log(maxAndMin([3,2,2,3,4,1]))