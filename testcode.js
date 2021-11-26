/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
 export function maxAndMin(numbers) {
    let mymin = Math.min(numbers);
    let mymax = Math.max(numbers);
    let rtn = {min:mymin, max:mymax};
    return rtn;
}
console.log(maxAndMin())