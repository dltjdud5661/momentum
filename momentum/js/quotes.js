const quotes = [
    {
        quote: "Go ahead, make my day",
        author: "Harry Callahan",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas Edison",
    },
    {
        quote: "If you can dream it, you can do it",
        author: "Walt Disney",
    },
    {
        quote: "There are no secrets to success. It is the result of preparation, hard work, and learing from failure",
        author: "Colin Powell",
    },
    {
        quote: "The secret of getting ahead is getting started",
        author: "Mark Twain",
    },
    {
        quote: "Empty your mind. Be formless. Shapeless. Like water",
        author: "Bruce Lee",
    },
    {
        quote: "It is not our abilities that show what we truly are, it is our choices",
        author: "Dumbledore, Harry Potter",
    },
    {
        quote: "I don't regret the things I've done, but those I did not do",
        author: "Empire Records",
    },
    {
        quote: "All we have to decide is what to do with the time that is given to us",
        author: "Gandalf, Lord of the rings",
    },
    {
        quote: "Being angry isn't bad thing, when I'm angry, I think like this because I'm not ready to hear my heart",
        author: "Wade, Elemental",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;