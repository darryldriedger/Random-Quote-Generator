// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var div = document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create a java script array of objects to hold quotes
	//each object should have:
	// quote property containing a string 
	// source property - string
	// citation- string
	// year - number

var quotesList =  [

	{quote: "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean" ,
	 source: "Lin-Chi",
	 citation: "The internet",
	 year: 1800
	 },

	{quote: "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together" ,
	 source: "Georg Christoph Lichtenberg",
	 citation: "The internet",
	 year: 2000},

	{quote: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear" ,
	 source: "Ambrose Redmoon",
	 citation: "The internet",
	 year: 1950},

	{quote: "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking" ,
	 source: "A. A. Milne",
	 citation: "The internet",
	 year: 1900},

	{quote: "Do not seek to follow in the footsteps of the men of old; seek what they sought" ,
	 source: "Basho",
	 citation: "The internet",
	 year: 3010}

	];

// create function named - getRandomQuote:
// selects a random quote object
//returns random quote
function getRandomQuote() {

	var i = Math.floor(Math.random()* quotesList.length) ;
	var randQ = quotesList[i].quote;
	'<p class="quote">' + quotesList[i].quote + '</p>'+
	'<p class="citation">' + quotesList[i].quote + 
		'<span class="citation">' + quotesList[i].quote + '</span>' +
		'<span class="year">' + quotesList[i].quote + '</span>' + 
	'</p>';
	return randQ
}

//printQuote displays the final HTML string to the page
function printQuote(){
	//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	var currentQuote = getRandomQuote();
	console.log(currentQuote);
	//printQuote constructs a string using the different properties of the quote object using the following HTML template: */
	document.getElementById('quote-box').innerHTML = 
	'<p class="quote">' + currentQuote + '</p>'+
	'<p class="citation">' + "Basho" + 
		'<span class="citation">' + "The internet" + '</span>' +
		'<span class="year">' + 3010 + '</span>' + 
	'</p>';
				
}
/*
			printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
			*/
function randColor() {
    var r;
    var g;
    var b;
    var myColor;
    
    r = Math.floor(Math.random()* 128 + 30);
    g = Math.floor(Math.random()* 128 + 30);
    b = Math.floor(Math.random()* 128 + 30);
    myColor = "rgb(" + r + "," + g +"," + b + ")";
    document.getElementById("testcolor").style.backgroundColor = myColor;
    document.getElementById("myContainer").style.borderColor = myColor;
}


