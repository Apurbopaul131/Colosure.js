(function addValue(){
    let numberOne = 5;
    let numberTwo = 7;
     function sum(){
        return numberOne + numberTwo; 
    }
    console.log(sum());
    console.dir(sum);


    numberOne = 10;
    numberTwo = 10;

    console.log(sum());
    console.dir(sum);
})();