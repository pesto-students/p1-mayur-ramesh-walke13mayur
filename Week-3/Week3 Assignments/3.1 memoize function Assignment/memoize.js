var add = function (a, b){
return a+b 
}
var memoize = function (foo){
var cache = {};
return function(...args){
    var argId = args.toString();
    if(cache[argId]){
        return cache[argId]
    }else{
        var value = foo(...args);
        cache[argId] = value
        return
    }
}
}
console.time();
console.log(add(10, 25)); // initial calculation
console.timeEnd();

console.time();
console.log(add(10, 25)); // using cache
console.timeEnd();
