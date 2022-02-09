const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

let startTime;
let elapsedTime=0;
let stopwatchInterval;

function timeToString(time){
    let diffInHrs = (time)/3600000
    let hh = Math.floor(diffInHrs)

    let diffInMM = (diffInHrs-hh)*60
    let mm = Math.floor(diffInMM)

    let diffInSS = (diffInMM-mm)*60
    let ss = Math.floor(diffInSS)

    let diffInMs = (diffInSS-ss)*1000
    let ms = Math.floor(diffInMs)

    
    let formattedHH = hh.toString().padStart(2,'0')
    let formattedMIN = mm.toString().padStart(2,'0')
    let formattedSEC = ss.toString().padStart(2,'0')
    let formattedMSEC = ms.toString().padStart(3,'0')
    stopwatch.innerHTML=`${formattedHH}:${formattedMIN}:${formattedSEC}:${formattedMSEC}`

}


function startStopwatch(){
    startTime = Date.now() - elapsedTime

    stopwatchInterval = setInterval(function printTime(){
        elapsedTime = Date.now()-startTime;

        timeToString(elapsedTime)
    },1)
    showButton('PAUSE')
}

function stopStopwatch(){
    clearInterval(stopwatchInterval)
    showButton('PLAY')

}
function resetStopwatch(){
    clearInterval(stopwatchInterval)
    stopwatch.innerHTML = '00:00:00:000'
    elapsedTime = 0;
    showButton('PLAY')

}







function showButton(buttonKey){
    let buttonToShow, buttonToHide;

    if(buttonKey=='PLAY'){
        buttonToShow = playButton
        buttonToHide = pauseButton
    }else{
        buttonToShow=pauseButton
        buttonToHide=playButton
    }
    buttonToShow.style.display='block';
    buttonToHide.style.display='none';
}



playButton.addEventListener('click',startStopwatch)
pauseButton.addEventListener('click',stopStopwatch)
resetButton.addEventListener('click',resetStopwatch)