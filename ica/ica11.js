const newbtn = document.querySelector('#js-new-quote');
addEventListener('click', getQuote);
//get this element & look for a click on it
const ansbtn = document.querySelector('#js-tweet');
addEventListener('click', getAns);

let answer = "";

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"

//async - runs in parallel to the other js 
async function getQuote() {
    //console.log('Test');

    try {
        const response = await fetch(endpoint);
        //wait for the results of fetch on endpoint variable 
        if (!response.ok) { //if the response u get out of endpoint isnt ok - catch it. '!' checks for not ok
            throw Error(response.statusText); //throw an error to get picked up - console will do the rest
        }
        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];
        //console.log(json); //json makes this readable for humans 
    }
    //try and fetch something off of api endpoint & if goes wrong - gives us the error back 
    //send alert to user that didnt work
        catch(err) {
            console.log(err)
            alert('Failed to fetch new quote')
        }
    }

    function displayQuote(question) {
        const questionTxt = document.querySelector('#js-quote-text'); //defined variable that looks for empty blank space where we put text
        //takes response from api - shoves text into this function 
        questionTxt.textContent = question;

    }

    function displayAns(answer) {
        const answerTxt = document.querySelector('#js-answer-text'); //defined variable that looks for empty blank space where we put text
        //takes response from api - shoves text into this function 
        answerTxt.textContent = answer;

    }

    getQuote();
    //run function once when page load

