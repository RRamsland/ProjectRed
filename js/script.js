	var score = 0;
	var boxValue = 1;
	var upgradeCost = 5;
	var autoCost = 1000;
	var autoBool = false;

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
	function automate(){
		if(score >= autoCost&&autoBool==false){
			score-=autoCost;
			$(".score").html("$"+score);
			autoBool=true;
			setInterval(addScore, 10000);
			if(score<upgradeCost){
				$(".upgrade").css("background","none");
			}
		}
	}