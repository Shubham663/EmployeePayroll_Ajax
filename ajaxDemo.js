function showTime(){
    let date = new Date();
    return "Hrs: " + date.getHours() + " : Minutes " + date.getMinutes() + " : Seconds " + date.getSeconds();
}

function sideTask(){
    console.log("Function ending " + showTime())
}

console.log("Execution started at " + showTime());
setTimeout(sideTask,5000);
console.log("The execution of procedure ending at " + showTime());