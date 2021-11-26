/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
 export function removeKey(object, key) {
    delete object[key]; 
 }
 
 /**
  * Does not mutate the object passed in
  * @param object
  * @param key
  * @returns {*} The object with its keys removed
  * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  * let obj = {
     name: 'Mr. Boss',
     title: 'boss',
     age: 33,
     password: 'pass123'
 };
  obj = removeKeyNonDestructive(obj, 'password');
  obj will not have the `password` field only because it was assigned the result of the function.
  If only `removeKeyNonDestructive` was called, nothing would have changed.
  */
 export function removeKeyNonDestructive(object, key) {
    let newobj = {...object};
    removeKey(newobj, key);
    return newobj;
 }
 
 /**
  * Remove and return the listed keys. Without mutating the object passed in.
  * @param object
  * @param {string[]} keyList
  * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  *
  * example:
 
 
  let obj = {
     name: 'Mr. Boss',
     title: 'boss',
     age: 33,
     password: 'pass123'
  };
  obj = removeKeys(obj, ['password', 'age']);
  // object not looks like this
  { name: 'Mr. Boss', title: 'boss' }
 
  * @return {*} The object with its keys removed.
  */
 export function removeKeys(object, keyList) {
    let newobj = {...object};
    for (const key of keyList){
       removeKey(newobj,key);
       console.log(newobj)
    }
    return newobj;
 }

 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 console.log(obj)