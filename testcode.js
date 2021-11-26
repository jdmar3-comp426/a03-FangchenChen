let obj={};
var keys=[1,2,3];
for(let key of keys){
    obj[key]=1;
}
console.log(obj["1"]);