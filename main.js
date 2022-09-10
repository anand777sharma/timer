// Global variables
const time_el = document.querySelector('.watch .time');
const stop_btn = document.getElementById("start_stop");
const reset_btn = document.getElementById("reset");

let seconds = 31;
let interval = null;
stop_btn.addEventListener("click", start_stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds--;
	let secs = seconds;
	time_el.innerText = `${secs}`;
	const audio=new Audio();
audio.src="alarm.mp3";
	if(seconds==5)
	audio.play();
	
}

function start () {
    stop();
    k=document.getElementById('num').value;
    if(k>0)
    seconds = k;
    else
    seconds=31;
	time_el.innerText = seconds;
	// if (interval) {
	// 	return
	// }
   
	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	
	interval = null;
}

function reset () {
	stop();
    k=document.getElementById('num').value;
    if(k>0)
    seconds = k;
    else
    seconds=30;
	time_el.innerText = seconds;
}
function start_stop() {
	if(interval!=null)
	stop();
	else
	start();
}