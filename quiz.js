var evaluateButton = document.getElementById('evaluate-button');
var points = 0;
var	attempts = 12;
var allButtons = document.querySelectorAll('button'); // ZATIAL NEPOUZITE -> buttony asi musim po jednom vybrat aby som im menil styl nie vsetky naraz
var introStart = document.getElementById('intro');
var game = document.getElementById('wholegame');
var time = 60;
var timeContainer = document.getElementById('timeCount');

//EVALUATE
evaluateButton.addEventListener('click', function(){
	alert("Your score is " + points);
	points = 0;
	attempts = 12;
	document.getElementById('points').innerHTML = points;
	document.getElementById('attempts').innerHTML = attempts;
})

//IF PLAYER HITS CORRECT BUTTON
function addPoints(clicked){
	points++;
	attempts--;
	document.getElementById('points').innerHTML = points;
	document.getElementById(clicked).style.backgroundColor = "green";
	document.getElementById('attempts').innerHTML = attempts;
}

//IF PLAYER HITS WRONG BUTTON
function removeAttempts(){
	if (attempts !== 0){
		attempts --;
		document.getElementById('attempts').innerHTML = attempts;
	}else{
		alert('You have 0 attempts left, please evaluate your test !');
	}
}

function startgame(){
	introStart.style.display = "none";
	game.style.display = "block";
	updateTime();
}
//Spravna volba by mala byt true, false namiesto premennej var XX ++;
//do addPoints funkcie pridat switch a podla toho ake ID tak tomu ID dat true


function updateTime(){
	if (time !== 0) {
		setTimeout(updateTime, 1000);
		time--;
		timeContainer.innerHTML = time;
	}else{
		alert("Out of time");
	}
}