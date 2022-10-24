const newQuote = document.getElementById('new-quote');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteContainer = document.getElementById('quote-container');
const loader = document.getElementById('loader');

let quoteData = [];
const randomQuote = () =>{
    const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
    //console.log(quote);
    quoteText.textContent = quote.text;
    //authorText.textContent = quote.author;

    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    if(!quote.author){
        authorText.textContent = "Anonymous";
    }else{
        authorText.textContent = quote.author;
    }
};
newQuote.addEventListener('click', randomQuote);

async function quoteGenerator(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        quoteData = await response.json();
        randomQuote();
    }catch(error){
        console.log(error);
    }
}
quoteGenerator();

let load;
function myLoad() {
  load = setTimeout(showPage, 2000);
}

function showPage() {
  loader.style.display = "none";
  quoteContainer.style.display = "block";
}