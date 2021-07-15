function adderValue(x){
    return function add(y){
        return y;
    }
}

var add5 = adderValue(5);

console.dir(add5);