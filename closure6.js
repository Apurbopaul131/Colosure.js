function stopWatch(){
    var startTime = Date.now();
   return function getDelay(){
        console.log( Date.now() - startTime);
    }
}
var timer = stopWatch();
timer();
