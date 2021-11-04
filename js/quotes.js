const quotes = [
    {
        quaote: "In the world you will have tribulation. But take heart; I have overcome the world.",
        author: "John 16:33",
    },
    {
        quaote: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        author: "Isaiah 41:10",
    },
    {
        quaote: "And we know that for those who love God all things work together for good, for those who are called according to His purpose.",
        author: "Romans 8:28",
    },
    {
        quaote: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",
        author: "Joshua 1:9",
    },
    {
        quaote: "Trust in the LORD with all your heart, and do not learn on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.",
        author: "Proverbs 3:5–6",
    },
    {
        quaote: "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.",
        author: "Romans 15:13 ",
    },
    {
        quaote: "If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",        
        author: "Chronicles 7:14",
    },
    {
        quaote: "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'",
        author: "Isaiah 41:13",
    },
    {
        quaote: "Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.",
        author: "1 Peter 5:6–7",
    },
    {
        quaote: "When I thought, My foot slips, Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul.",
        author: "Psalm 94:18–19",
    }
];

const quote =  document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quaote;
author.innerText = todaysQuote.author;


