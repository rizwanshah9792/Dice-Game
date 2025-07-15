// Change the image1 to randomDice
var randomNum = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDice = "images/dice" + randomNum + ".png"; // Dice1 to Dice 6
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

// Change the image2 to randomDice
var randomNum2 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDice2 = "images/dice" + randomNum2 + ".png"; // Dice1 to Dice 6
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


// Change the Winner tag
if(randomNum > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins....";
}
else if (randomNum < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins....";
}
else {
    document.querySelector("h1").innerHTML = "Draw....";
}

// Add the refresh button
document.querySelector("button").addEventListener("click", function() {
    location.reload();
});