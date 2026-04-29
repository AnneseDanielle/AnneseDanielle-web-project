console.log("The JS file is connected!");
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("h1");
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good morning Party People!";
    } else if (hours < 18) {
        greeting = "Good afternoon Danielle Fans!";
    } else {
        greeting = "Good evening Danielle Enthusiasts!";
    }
    if (header) header.textContent =greeting;

    const images = document.querySelectorAll("img");
    images.forEach(image =>{
              image.style.cursor = "pointer";
        image.addEventListener("click", () => alert (image.getAttribute("alt")));
    });
    const gamingSection = document.getElementById("gaming");
    if (gamingSection) {
        const quizDiv = document.createElement("div");
        quizDiv.innerHTML = `
        <p><strong>Gaming Quiz:</strong>What do you think Danielle's favorite game is?</p>
        <button id="option1" class="button">Borderlands 4</button>
        <button id="option2" class="button">Diablo IV</button>
        <button id="option3" class="button">Stardew Valley</button>
        <button id="option4" class="button">Cult of the Lamb</button>
        <p id="quizResult"></p>
        `;
        gamingSection.insertAdjacentElement("afterend", quizDiv);
        document.getElementById("option1").onclick = () => document.getElementById("quizResult").textContent = "Incorrect! Danielle's favorite game is actually Cult of the Lamb.";
        document.getElementById("option2").onclick = () => document.getElementById("quizResult").textContent = "Incorrect! Danielle's favorite game is actually Cult of the Lamb.";
        document.getElementById("option3").onclick = () => document.getElementById("quizResult").textContent = "Incorrect! Danielle's favorite game is actually Cult of the Lamb.";
        document.getElementById("option4").onclick = () => document.getElementById("quizResult").textContent = "Correct! Danielle's favorite game is actually Cult of the Lamb.";
    }
});    

function submit_game() {
    const favoriteGameInput = document.getElementById("favoriteGame");
    let answer = document.getElementById("response");
    answer.innerHTML = `Your favorite game is: ${favoriteGameInput.value.trim()}. Great choice!`;
}