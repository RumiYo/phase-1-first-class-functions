function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    const namedFunction = function(){};
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){};
}
console.log("Rumi is awesome!");