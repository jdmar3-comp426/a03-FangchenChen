/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
 export function identifyVariable(variable) {
    return {type: typeof variable, value: variable};
 }
 /**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
 export function identifyArray(array) {
    var rtn = []
    for (const obj of array){
        console.log(identifyVariable(obj))
       rtn.push(identifyVariable(obj));
    }
    return rtn;
 }
console.debug( identifyArray(['some', 3, [3, 4], false]));