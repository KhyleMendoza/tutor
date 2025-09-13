let score = 0

console.log(score);

document.getElementById("score").addEventListener("click", function() {
    score++
    document.getElementById("coins").innerText= score
})


