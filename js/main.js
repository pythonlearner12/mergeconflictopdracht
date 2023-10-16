require("./newgreeting.js").newGreeting();

// Haikus
function basicHaiku()
{
    return ["Lopen langs de bomen","We saw an elephant descending","On a day in spring."];
}

function student1Haiku()
{
    return ["The lamp once out", "Cool stars enter ", "The window frame."];
}

function student2Haiku()
{
    return ["An old silent pond...", "A frog jumps into the pond", "splash! Silence again."];
}

// Get random haiku.
const haikus = [
    basicHaiku(),
    student1Haiku(),
    student2Haiku()
];

function randomHaiku()
{
    return haikus[Math.floor(Math.random(haikus.length))];
}

console.log(randomHaiku());