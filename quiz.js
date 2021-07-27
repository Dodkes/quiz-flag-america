var evaluateButton = document.getElementById('evaluate-button');
var introStart = document.getElementById('intro');
var game = document.getElementById('wholegame');
var time = 60;
var timeContainer = document.getElementById('timeCount');
var gameFinished = false;
var flags = [costarica = false, 
			brazil = false, 
			columbia = false,
			peru = false,
			venezuela = false,
			mexico = false,
			uruguay = false,
			chile = false,
			honduras = false,
			puertorico = false];

//EVALUATE TEST -> bottom button
evaluateButton.addEventListener('click', () =>{
	var finalResult = flags.filter(Boolean);
	alert("Your score is " + finalResult.length + "/10");
	reveal();
	gameFinished = true;
})

//START GAME
function startgame(){
	introStart.style.display = "none";
	game.style.display = "block";
	updateTime();
}

//Timer
function updateTime(){
	if (time > 0) {
		if (gameFinished == false) {
		setTimeout(updateTime, 1000);
		time--;
		timeContainer.textContent = time;
		}
	}else{
		var finalResult = flags.filter(Boolean);
		alert("Out of time. " + "Your score is " + finalResult.length + "/10");
		reveal();
		gameFinished = true;
	}
}

//Set color after button click and run the points function
function choice(clickedId){
	if (gameFinished == false) {
		var parentId = document.getElementById(clickedId).parentNode.id;
		var clickedButton = document.getElementById(clickedId);
		if (parentId == "costarica") {
			pointsFunction(clickedId);
			$('#costarica').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "brazil"){
			pointsFunction(clickedId);
			$('#brazil').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "columbia"){
			pointsFunction(clickedId);
			$('#columbia').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "peru"){
			pointsFunction(clickedId);
			$('#peru').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "venezuela"){
			pointsFunction(clickedId);
			$('#venezuela').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "mexico"){
			pointsFunction(clickedId);
			$('#mexico').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "uruguay"){
			pointsFunction(clickedId);
			$('#uruguay').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "chile"){
			pointsFunction(clickedId);
			$('#chile').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "honduras"){
			pointsFunction(clickedId);
			$('#honduras').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}else if (parentId == "puertorico"){
			pointsFunction(clickedId);
			$('#puertorico').children().css({"backgroundColor": "white"});
			clickedButton.style.backgroundColor = "#66ccff";
		}
	}
}

function pointsFunction(myId){
	if (gameFinished == false) {
		//First question
		if (myId == 2) {
			flags[0] = true;
		}else if (myId == 1 || myId == 3){
			flags[0] = false;
		}
		if (myId == 6){
			flags[1] = true;
		}else if (myId == 4 || myId == 5){
			flags[1] = false;
		}
		if (myId == 8) {
			flags[2] = true;
		}else if (myId == 7 || myId == 9){
			flags[2] = false;
		}
		if (myId == 10) {
			flags[3] = true;
		}else if(myId == 11 || myId == 12){
			flags[3] = false;
		}
		if (myId == 15) {
			flags[4] = true;
		}else if(myId == 14 || myId == 13){
			flags[4] = false;
		}
		if (myId == 18) {
			flags[5] = true;
		}else if (myId == 17 || myId == 16){
			flags[5] = false;
		}
		if (myId == 20) {
			flags[6] = true;
		}else if (myId == 19 || myId == 21){
			flags[6] = false;
		}
		if (myId == 22) {
			flags[7] = true;
		}else if (myId == 23 || myId == 24){
			flags[7] = false;
		}
		if (myId == 27) {
			flags[8] = true;
		}else if (myId == 25 || myId == 26){
			flags[8] = false;
		}
		if (myId == 28) {
			flags[9] = true;
		}else if (myId == 29 || myId == 30){
			flags[9] = false;
		}
	}
}

function reveal(){
	$('#2, #6, #8, #10, #15, #18, #20, #22, #27, #28').css({"backgroundColor" : "green"});
}
