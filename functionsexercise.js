// 1)
function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();
console.log(`=`.repeat(20));

// 2)
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Meep`);
console.log(`=`.repeat(20));

// 3)
function muppetShow(a, b) {
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music, it's time to light the lights.`);
    }
}
muppetShow(`Muppet`, `Show`);
console.log(`=`.repeat(20));

// 4)
function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();
console.log(`=`.repeat(20));

// 5)
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));
console.log(`=`.repeat(20));

// 6)
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();
console.log(`=`.repeat(20));

// 7)
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me.`);
rainbowConnection();
console.log(`=`.repeat(20));

// 8)
// No

// 9)
// Yes

// 10)
const newMuppetsMovie = [
    'The Muppets',
    'Muppets Most Wanted'
];
const uppers = newMuppetsMovie.map(function(x){
    return x.toUpperCase();
});
console.log(uppers);
console.log(`=`.repeat(20));

// 11)
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);
console.log(a);
console.log(`=`.repeat(20));

// 12)
const charactersOne = [
    `Statler`,
    `Waldorf`
];
const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
];
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random()*characters.length)]}`);
}
randomMuppet(charactersOne);
randomMuppet(charactersTwo);
console.log(`=`.repeat(20));

// 13)
caps = (string) => {
    let newString = ``;
    for (i = 0; i <string.length; i++){
        if(i % 2 === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toUpperCase();
        }
    }
    return newString
}
console.log(caps(`Hello World`));