// a list of variables  - apparently this is a best practice to declare them at the top of code.
var div = "";
var intervalID = "";
var quotesList = "";
var tempList = [];
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
div = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//The set interval is used to refresh the quote every 30 seconds
intervalID = window.setInterval(printQuote, 30000);//

//create a java script array of objects to hold quotes
	//each object should have:
	// quote property containing a string 
	// source property - string
	// citation- string : (made-up)
	// year - number : (made-up)
	//etc.. "tag" : (made-up)
quotesList =  [

	{/*0*/quote: "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean" ,
	 qsource: "Lin-Chi",
	 citation: "The internet",
	 year: 1800,
	 tag: "proverb"},

	{/*1*/quote: "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together",
	 qsource: "Georg Christoph Lichtenberg",
	 citation: "The internet",
	 year: 2000,
	 tag: "Intelligence"},

	{/*2*/quote: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear" ,
	 qsource: "Ambrose Redmoon",
	 citation: "The internet",
	 year: 1950,
	 tag: "proverb"},

	{/*3*/quote: "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking" ,
	 qsource: "A. A. Milne",
	 citation: "The internet",
	 year: 1900,
	 tag: "Intelligence"},

	{/*4*/quote: "Do not seek to follow in the footsteps of the men of old; seek what they sought" ,
	 qsource: "Basho",
	 citation: "The internet",
	 year: 3010,
	 tag: "proverb"},

	{/*5*/quote: "Advice is what we ask for when we already know the answer but wish we didn’t." ,
	 qsource: "Erica Jong",
	 citation: "The internet",
	 year: 2005,
	 tag: "proverb"},

	{/*6*/quote: "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for – in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it." ,
	 qsource: "Ellen Goodman",
	 citation: "The internet",
	 year: 1888,
	 tag: "Existence"},

	{/*7*/quote: "I am patient with stupidity but not with those who are proud of it." ,
	 qsource: "Edith Sitwell",
	 citation: "The internet",
	 year: 2055,
	 tag: "Intelligence"},

	{/*8*/quote: "We learn something every day, and lots of times it’s that what we learned the day before was wrong." ,
	 qsource: "Bill Vaughan",
	 citation: "The internet",
	 year: 2800,
	 tag: "proverb"},

	{/*9*/quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it." ,
	 qsource: "Aristotle",
	 citation: "The internet",
	 year: 1700,
	 tag: "Intelligence"},

	{/*10*/quote: "Believe those who are seeking the truth. Doubt those who find it." ,
	 qsource: "André Gide",
	 citation: "The internet"
	 },

	{/*11*/quote: "There are many who dare not kill themselves for fear of what the neighbors will say." ,
	 qsource: "Cyril Connolly",
	 tag: "Existence"}
	];

//This function produces random background color with an offset font color to match
function randomColor() {
	var r; var g; var b; var x; var Color;
	//the random color range is from 0 to 156
    r = Math.floor(Math.random()* 156);
    g = Math.floor(Math.random()* 156);
    b = Math.floor(Math.random()* 156); 
    Color = "rgb(" + r + "," + g +"," + b + ")";
    //sets the random background color
    document.getElementById("randomBackground").style.background = Color;
    //the random color range is from 100 to 256
    r += 100;
    g += 100;  
    b += 100;  
    x = 0.8;//optional random transparency --> Math.floor(Math.random()* 9) / 10;
    Color = "rgba(" + r + "," + g +"," + b +"," + x + ")";
    //sets the random font color
    document.getElementById("quote-box").style.color = Color;
}

//This variable basically makes a copy of the quotesList to manipulate without affecting the original list
tempList = quotesList.slice(0);

// create function named - getRandomQuote:
	// selects a random quote object
	// returns random quote	array/object
function getRandomQuote() {
	var i;
	var randQuoteArr = [];
	//this checks if the templist has dropped its entire list of quotes and resets it to include a complete list to pull from
	if(tempList.length === 0){
		tempList = quotesList.slice(0);
	}
	//generates  a number to choose a random quote from the available list and console logs the random number and the current length of the list (for reference) 
	i = Math.floor(Math.random()* tempList.length);
	console.log("number" + i);
	console.log("tempList" + tempList.length);
	//pushes the current qoute to the randQuoteArr variable to be returned and used in printQuote
	randQuoteArr.push(tempList[i]);

	//the splice was used to drop the current qoute from the list until the temporary qoutes list is empty, in which case the temporary list will be reset.
	tempList.splice(i, 1);
	return randQuoteArr;
	
}

//printQuote displays the final HTML string to the page:
function printQuote(){
	var currentQuote = '';
	var message = '';
	//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	currentQuote = getRandomQuote();
	//printQuote constructs a string using the different properties of the quote
	/*printQuote doesn't add a 
	<span class="citation"> for a missing citation or a 
	<span class="year"> if the year property is missing.
	I included an if else to check for missing elements and only add the ones that exist.*/

	message = '';
	message += '<p class="quote">' + currentQuote[0].quote + '</p>';
	message +=  '<p class="source">' + currentQuote[0].qsource;
	if (currentQuote[0].citation !== undefined) {
		message +=  '<span class="citation">' + currentQuote[0].citation + '</span>';
	} else {
		message += "";
	}
	if (currentQuote[0].year !== undefined) {
		message +=  '<span class="year">' + currentQuote[0].year + '</span>';
	} else {
		message += "";
	}
	if (currentQuote[0].tag !== undefined) {
		message +=  '<p class="tag">' + currentQuote[0].tag + '</p>';
	} else {
		message += "";
	}
	message +=  '</p>';
	//sets the current random quote to the quote-box ID
	document.getElementById('quote-box').innerHTML = message;
	//calls the random color function to include the random background color and font color generated in the function
	randomColor();
}


