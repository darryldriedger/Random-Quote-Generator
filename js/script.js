// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var div = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var intervalID = window.setInterval(printQuote, 5000);
//var timeoutID = window.setTimeout(printQuote, 5000);

//create a java script array of objects to hold quotes
	//each object should have:
	// quote property containing a string 
	// source property - string
	// citation- string
	// year - number

var quotesList =  [

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

// create function named - getRandomQuote:
// selects a random quote object
//returns random quotes	var i = Math.floor(Math.random()* quotesList.length) ;	
//console.log(quotesList);
	var tempList = quotesList;
function getRandomQuote() {
	var i = Math.floor(Math.random()* tempList.length);
	console.log(i);
	console.log(quotesList.length);
	console.log(tempList.length);
/*
printQuote doesn't add a 
<span class="citation"> for a missing citation or a 
<span class="year"> if the year property is missing
*/
	var message = '';
		message += '<p class="quote">' + quotesList[i].quote + '</p>';
		message +=  '<p class="source">' + quotesList[i].qsource;
		if (quotesList[i].citation !== undefined) {
    		message +=  '<span class="citation">' + quotesList[i].citation + '</span>';
		} else {
    		message += "";
		}
		if (quotesList[i].year !== undefined) {
    		message +=  '<span class="year">' + quotesList[i].year + '</span>';
		} else {
    		message += "";
		}
		if (quotesList[i].tag !== undefined) {
    		message +=  '<p class="tag">' + quotesList[i].tag + '</p>';
		} else {
    		message += "";
		}
		message +=  '</p>';

	tempList.splice(i, 1);
	//console.log(tempList);
	return message;
}
function randomColor() {
    var r;
    var g;
    var b;
    var Color;
    r = Math.floor(Math.random()* 250);
    g = Math.floor(Math.random()* 250);
    b = Math.floor(Math.random()* 250);
    Color = "rgb(" + r + "," + g +"," + b + ")";
    document.getElementById("randomBackground").style.background = Color;
}

//printQuote displays the final HTML string to the page
function printQuote(){
	//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	var currentQuote = getRandomQuote();
	//console.log(currentQuote);
	//printQuote constructs a string using the different properties of the quote object using the following HTML template: */
	document.getElementById('quote-box').innerHTML = currentQuote;
	randomColor();
}


