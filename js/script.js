	var score = 0;
	var boxValue = 1;
	var upgradeCost = 5;

	function addScore(){
		score += boxValue;
		$(".score").html("$"+score);
		if(score>=upgradeCost){
			$(".upgrade").css("background","#61FF61");
		}
	}
	function upgrade(){
		if(score >= upgradeCost){
			score-=upgradeCost;
			$(".score").html("$"+score);
			boxValue+=1;
			$(".box").html("$"+boxValue);
			upgradeCost = Math.round(upgradeCost*1.25);
			$(".upgrade").html("$"+upgradeCost);

			if (score<upgradeCost){
				$(".upgrade").css("background","none");
			}
		}

	}