function Balance(initialBalance){
    var balance = initialBalance;
    function returnBalance(){
        return balance;
    }
    return returnBalance;
}

var result = Balance(10000);
console.dir(result);