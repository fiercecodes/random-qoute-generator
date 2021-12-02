const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".name"),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector(".copy"),
    pingTwitter = document.querySelector(".twitter"),
    synth = speechSynthesis;

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Randomizing ...";
    fetch("https://free-quotes-api.herokuapp.com/").then(response => response.json()).then(result => {
        quoteText.innerText = result.quote;
        authorName.innerText = result.author || "No Author";
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "Randomize";
    });
}
speechBtn.addEventListener("click", () => {
    if (!quoteBtn.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});
pingTwitter.addEventListener("click", () => {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(twitterUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);

pingTwitter.addEventListener("click", () => {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(twitterUrl, "_blank");
});
const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[d.getDay()];
document.getElementById("getday").innerHTML = day;
function onCopy() {
    alert("Copied Quote Successfully To 📋!");
  }
