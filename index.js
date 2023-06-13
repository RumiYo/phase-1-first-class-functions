/*
function monday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function tuesday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
function wednesday(){
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
function thursday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
*/
function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return namedFunction = function(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}