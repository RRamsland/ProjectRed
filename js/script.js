$(document).ready(function(){

	var score;

	function addScore(){
		score += 1;
		(".score").html("$"+score);
	}

});