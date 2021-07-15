function init(){
    var name = 'Apurbo paul';
    function displayName(){
       return name;
    }
    return displayName;
}
var myFun = init();
console.dir(myFun);