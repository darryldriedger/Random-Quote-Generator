// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var foo = prompt("type something here!");
alert(foo);
//DONE	//create a java script array of objects to hold quotes
		//
		//each object should have:
		// quote property containing a string 
		// source property - string
		// citation- string
		// year - number
var quotes =  [

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
	 year: 3010},
	];

// create function nameed - getRandomQuote:
// selects a random quote object
//returns random quote
function getRandomQuote() {
//var randQ = Math.floor(Math.random()*6) + 1;
}
// create function printQuote
function printQuote(){

}
// calls getRandomQuote and stores the object bariable

/*Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string using the different properties of the quote object using the following HTML template: <p class="quote"> [quote here] </p> <p class="citation"> [citation here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
*/