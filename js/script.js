	var score = 0;
	var boxValue = 1;
	var upgradeCost = 5;
	var autoCost = 1000;
	var autoBool = false;
	var boxTime = 10000;

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
			boxTime-=100;
			$(".box").html("$"+boxValue);
			upgradeCost = Math.round(upgradeCost*1.25);
			$(".upgrade").html("$"+upgradeCost);

			if (score<upgradeCost){
				$(".upgrade").css("background","none");
			}
			
		}

	}

	$( "#progress" ).progressbar({
  		max: boxTime
	});



	function automate(){
		if(score >= autoCost&&autoBool==false){
			score-=autoCost;
			$(".score").html("$"+score);
			autoBool=true;
			var cashflow = setInterval(addScore, boxTime);

			var value = 0;
			var timer = setInterval(function(){
				$("#progress").progressbar ("value", value);
			  	value++;
			  	if (value > boxTime) value=0;
			},1)




			//var timer = setInterval (function (){
  			//	$("#progress").progressbar ("value", value);
  			//	value++;
  			//	addScore();
  			//	if (value > 100) clearInterval (timer);
			//}, boxTime);


			if(score<upgradeCost){
				$(".upgrade").css("background","none");
			}
		}
	}

	