<!DOCTYPE html>
<html>
	<head>
		<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">
		<link rel='stylesheet' type="text/css" href="assets/css/style.css">
		<title>Sorting Algorithm</title>
	</head>
	
	<body onload="generate_random()">
		<p class="lw">Sorting Algorithms</p>
		<center>
		  <canvas id="blocks" width='1020px' height='700px'></canvas><br>
		  <button class='randomize' Onclick="randomize()";>RANDOMIZE</button>
		  <button class='sort' Onclick="sort_bogo()">BOGO RANDOM</button>
		  <button class='sort' Onclick="bubble_sort()">BUBBLE SORT</button>
		  <button class='sort' Onclick="selection_sort()">SELECTION SORT</button>
		  <p class="data">ATTEMPTS:</p><p id="count" class="data"></p>
		</center>
	</body>
	<script>
	var canvas = document.getElementById("blocks");
	var ctx = canvas.getContext("2d");
	var canvas_w = 1020;
	var canvas_h = 700;
	var block_w = 100;
	var block_h = canvas_h;
	var start_x = 60;
	var start_y = 20;
	var arr =  ['1', '2', '3', '4', '5', '6'];
	var startArray =  ['1', '2', '3', '4', '5', '6'];
	var count = 0;
	
	function generate_random() {
		start_x = 60;
	    ctx.fillStyle = "#36A1D4";
		ctx.fillRect(0,0,canvas_w,canvas_h);
	    ctx.fillStyle = "#D22D16";
			for(let i = 0; i < startArray.length; i++){
			   ctx.fillRect(start_x, start_y+(100*startArray[i]), block_w,  block_h-100);
			   start_x += 160;
			
			}
	}
		
	function randomize(){
	  shuffle(startArray);
	  generate_random();
	}
	
	function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	  console.log(startArray);
	}
	
	//CHECKS WHETHER ARRAYS MATCH
	var arraysMatch = function (arr1, arr2) {
		if (arr1.length !== arr2.length) return false;
		for (var i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false;
		}
		return true;
	};
	
	////////////////////BOGO RANDOM SORT//////////////////
	function sort_bogo(){
		if (arraysMatch(startArray, arr)) {
			console.log("Sorted!");
			console.log("Attempts: ", count);
			count = 0;
		}	
		else {
		    randomize();
			count++;
			document.getElementById("count").innerHTML = count;
			console.log(count);
			setTimeout( function(){
				sort_bogo();
			}, 100 );		
		}		
	}
	//////////////////////SELECTION SORT///////////////////////

	//////////////////////BUBBLE SORT//////////////////////////

	function bubble_sort() {
		for (let i=0; i < startArray.length - 1; i++) {
			(function (i) {
				setTimeout(function () {
					if (arraysMatch(startArray, arr)) {	
						document.getElementById("count").innerHTML = count;			
						console.log("Sorted!");
						console.log("Attempts: ", count);
						count = 0;
					}
					var e1 = i;
					var e2 = i+1;
					var temp = 0;
					console.log(startArray[e1], startArray[e2]);
					if (greater(startArray[e1], startArray[e2])){
						temp = startArray[e1];
						startArray[e1] = startArray[e2];
						startArray[e2] = temp;
						console.log(startArray);
						generate_random();
						count++;
					
				}, 500*i);
			})(i);
		}
		if (arraysMatch(startArray, arr)) {	
                document.getElementById("count").innerHTML = count;			
				console.log("Sorted!");
				console.log("Attempts: ", count);
				count = 0;
		}
		else {
			setTimeout(function() {
				bubble_sort();
			}, 1000);
		}
	}
	
	var greater = function(var1,var2){
		if (var1>var2){ return true;}
		if (var1<var2){ return false;}
	}
	</script>
</html>