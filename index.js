function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return namedFunction = function(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}
console.log("Rumi is awesome!");