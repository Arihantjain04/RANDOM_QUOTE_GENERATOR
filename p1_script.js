// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// fetch quotes by custom arrays

// const quotes = [{
//     quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."` ,
//     person:`Nelson Mandela.`
// },{
//     quote:`"The way to get started is to quit talking and begin doing."` ,
//     person:`Walt Disney.`
// },{
//     quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."` ,
//     person:`Steve Jobs.`
// },{
//     quote:`"If life were predictable it would cease to be life, and be without flavor."` ,
//     person:`Eleanor Roosevelt.`
// },{
//     quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."` ,
//     person:`Oprah Winfrey.`
// },{
//     quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."` ,
//     person:`James Cameron.`
// },{
//     quote:`"Life is what happens when you're busy making other plans."` ,
//     person:`John Lennon.`
// },{
//     quote:`"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. "` ,
//     person:`Helen Keller.`
// },{
//     quote:`"When you reach the end of your rope, tie a knot in it and hang on."` ,
//     person:`Franklin D. Roosevelt.`
// },{
//     quote:`"Don't judge each day by the harvest you reap but by the seeds that you plant."` ,
//     person:`Robert Louis Stevenson.`
// },];

// btn.addEventListener('click', function(){

//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })

// fetch quotes by using API

const url = "https://api.quotable.io/random";

let getQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        quote.innerText = item.content;
        person.innerText = item.author;
    });
};

btn.addEventListener("click", getQuote);

// window.addEventListener("load", getQuote);
