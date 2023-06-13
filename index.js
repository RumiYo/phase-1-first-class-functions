function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return namedFunction = function(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}