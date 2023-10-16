const newgreeting = require("./newgreeting.js");
console.log("merge oefening leuk!")

newgreeting.newGreeting()


function basicHaiku()
{
    return ["lopen langs de bomen","We saw an elephant descending","On a day in spring."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()