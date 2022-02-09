const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

let sec=0;
let min=0;
let hr=0;

var timeStopped = true

function startStopwatch(){
    if(timeStopped){
        timeStopped=false;
        setTimeout(stopwatchCycle,1000)
        showButton('PAUSE')
    }
}
function stopwatchCycle(){
    if(timeStopped===false){
        sec = parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)

        sec+=1;

        if(sec===60){
            min+=1;
            sec=0;
        }
        if(min===60){
            hr+=1;
            min=0;
            sec=0;
        }

        // if(sec<10){
        //     sec='0'+sec
        // }
        // if(min<10){
        //     min='0'+min
        // }
        // if(hr<10){
        //     hr='0'+hr
        // }
        // stopwatch.innerHTML=`${hr}:${min}:${sec}`


        let formattedHH = hr.toString().padStart(2,'0')
        let formattedMIN = min.toString().padStart(2,'0')
        let formattedSEC = sec.toString().padStart(2,'0')
        stopwatch.innerHTML=`${formattedHH}:${formattedMIN}:${formattedSEC}`
    
    

    
    setTimeout(stopwatchCycle,1000) //this is like function calling itself again and again
    }
}

function stopStopwatch(){
    if(timeStopped===false){
        timeStopped=true
        showButton('PLAY')
    }
}

function resetStopwatch(){
    stopwatch.innerHTML='00:00:00'
    timeStopped=true
    hr=0
    min=0
    sec=0
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