	var numberOfSquares=6
	var colors = generateRandomColors(numberOfSquares);
	var squares	= document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var pickedColor = pickColor();
	var messageDisp = document.querySelector("#message");
	var h1Back = document.querySelector("h1");
	var resetBtn = document.querySelector("#reset");
	var hardBtn = document.querySelector("#hardButton");
	var easyBtn = document.querySelector("#easyButton");


//easy version
	hardBtn.addEventListener("click", function() {
		h1Back.style.background = "steelblue";
		easyBtn.classList.remove("selected");
		hardBtn.classList.add("selected");
		numberOfSquares=6;
		colors=generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		for(var i=0; i<squares.length;i++){
			squares[i].style.display ="block";
			squares[i].style.background=colors[i];
		}

 	});
 
 //hard version
	easyBtn.addEventListener("click", function() {
		h1Back.style.background = "steelblue";
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");

		numberOfSquares = 3;
		colors=generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		for(var i=0; i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.background=colors[i];
			}
			else
				squares[i].style.display ="none";
		}
	});


	resetBtn.addEventListener("click", function() {
		messageDisp.textContent = "";
		resetBtn.textContent = "New colors";
		//generate all new coolors
		h1Back.style.background = "steelblue";
		var num;
		colors = generateRandomColors(numberOfSquares);
		//pick a new random color from array
		pickedColor = pickColor();

		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		//change colors of squares	
		for(var i=0; i<squares.length; i++)	{
		 
		//initial colors
		squares[i].style.backgroundColor = colors[i];
}});


	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)	{

		//initial colors
		squares[i].style.backgroundColor = colors[i];

		//event listener (click)
		squares[i].addEventListener ("click", function() {
			//garb color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to pickedColor
			if(pickedColor === clickedColor){
				messageDisp.textContent = "Correct";
				//loop trough all squares and change colors 
				resetBtn.textContent = "Play again";
				for(var j=0; j<squares.length; j++)	{
					squares[j].style.background = pickedColor;
				}
				h1Back.style.background = pickedColor;
			}
			else {
				this.style.background = "#232323";
				messageDisp.textContent = "Try Again";

			}
		});
	}

function pickColor(){
	//picking random number BETWEN 0 i 6
	//math.floor mice decimalnu tocku 
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(numb){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<numb; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor (){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}