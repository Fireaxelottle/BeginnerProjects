// random generators
var n = Math.random();

n =Math.floor (n*6+1);

function dice1() {


if (n === 1 ) {
    document.querySelector("#img1").src ="dice1.png";
}
else if (n === 2){
    document.querySelector("#img1").src ="dice2.png";
}
else if (n === 3){
    document.querySelector("#img1").src ="dice3.png";
}
else if (n === 4){
    document.querySelector("#img1").src ="dice4.png";
}
else if (n === 5){
    document.querySelector("#img1").src ="dice5.png";
}
else {
        document.querySelector("#img1").src ="dice6.png";
}

};

// random generators
var x = Math.random();

x =Math.floor (x*6+1);
function dice2(){


if (x === 1 ) {
    document.querySelector("#img2").src ="dice1.png";
}
else if (x === 2){
    document.querySelector("#img2").src ="dice2.png";
}
else if (x === 3){
    document.querySelector("#img2").src ="dice3.png";
}
else if (x === 4){
    document.querySelector("#img2").src ="dice4.png";
}
else if (x === 5){
    document.querySelector("#img2").src ="dice5.png";
}
else {
        document.querySelector("#img2").src ="dice6.png";
}

};

dice1();
dice2();

// WINNER CHOSER 

if (n > x) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if (x > n){
    document.querySelector("h1").innerHTML = "Player 2 Won";
} 