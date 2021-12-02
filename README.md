<!-- wp:paragraph -->
<p>Hey Everyone 👋, today’s article is aimed at beginners trying to build a random quote generator using JavaScript. This will definitely make you understand the interaction between the frontend and backend and how they work on a web browser.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In my previous post, I had shared about <a href="/text-to-speech-converter" target="_blank" rel="noreferrer noopener">Amazing Text To Speech Converter With HTML, CSS &amp; JavaScript (2022)</a>. I received a great response to that, so I thought why not share more of my projects for free 🎉.</p>
<!-- /wp:paragraph -->

<!-- wp:verse -->
<pre class="wp-block-verse"><strong>Note:</strong> I've worked very hard on this project and the result, was making it free 🤗. You can support me in return for free by stargazing the official repository <a href="https://github.com/fiercecodes/random-qoute-generator" target="_blank" rel="noreferrer noopener">here</a>.</pre>
<!-- /wp:verse -->

<!-- wp:paragraph -->
<p>Each time you trigger the randomize button, you’ll get a new quote. You can also convert to speech, copy to clipboard, or share on Twitter by choosing the buttons.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As for this project, we’ll build a random quote generator that will display a quote fetched from an API on a button click or a default set. To get started, like always you’ll need three essential things that are forever useful for any sort of project:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>A web browser</li><li>A code editor</li><li>A desire boost</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>For this tutorial, I will use the Microsoft Edge browser, Visual Studio Code as my code editor, and most importantly a boost in my desire to build something till the end! If you don’t seem familiar with my suggestions, feel free to use any other alternative.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Random Quote Generator (Understanding)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To present random quotes, I used a free API defined from (https://free-quotes-api.herokuapp.com/). You can use any other API  with basic JavaScript for this project.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A Random Quote Generator is proficient in pulling quotes randomly from an API, any database, or plainly from an array. We will be designing a Random Quote Generator from scratch using HTML, CSS, JavaScript, and free-quotes API.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://res.cloudinary.com/practicaldev/image/fetch/s--DxEMRFWc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/orhykfs2p4t7usi6k13h.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--DxEMRFWc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/orhykfs2p4t7usi6k13h.png" alt="Random Quote Generator "/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>If you’re considering a problem understanding what I’m explaining then you can watch the subsequent video tutorial below for more erudition.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;!---Video--></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I assume you’ve cherished this random quote generator and surmised the basic codes of it. If you esteemed this project and want to get source codes files then you can easily go to the last part of the blog page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But, before you go to copy and paste the codes, let’s conjecture the main JavaScript codes. In the JavaScript codes, first; I called a <code>randomQuotes()</code> function which would trigger upon a button click.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this function, using the free-quotes-api.herokuapp.com API I retrieved the random quotes and displayed them on the webpage. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Second; as for the TTS (Text To Speech) functionality, there is no out-sourced API is used as it is attainable with the Web Speech API of JavaScript core.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Third; copy to the clipboard, I used the <code>writeText()</code> function of the explorer object. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Last; to direct share on Twitter, I passed the quoted text in the Tweet URL unit, and by implementing the window <code>open()</code> arrangement, I initiated this URL in a new tab.<a href="https://dev.to/jaikt/best-ultimate-guide-to-build-a-random-quote-generator-2022-8m4#random-quote-generator-building"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Random Quote Generator (Source Codes)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For every project, we need some basic core files. In this case, we’ll need three files with alike extensions, i.e&nbsp;<code>.html</code>,&nbsp;<code>.css</code>,&nbsp;<code>.js</code>. Once you’ve organized them in a folder (e.g&nbsp;<code>random-quote-generator</code>), you are good to paste the source code from the following sections.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://res.cloudinary.com/practicaldev/image/fetch/s--cdLJxx-p--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5w7mnw23ae81egwii7uj.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--cdLJxx-p--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5w7mnw23ae81egwii7uj.png" alt="Image description"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>You can optionally download the whole source code of this Random Quote Generator from the available mirrors, at the end of the article.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Firstly, create an HTML file with a filename <code>index.html</code> and paste the following code into your HTML file. ~ <strong>Remember</strong>, you’ve to create a file with an <code>.html</code> extension at the last.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
```<!-- Built by FierceCodes (https://fiercecodes.ga/) -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<!-- Meta Tags Start, For Reference https://www.w3schools.com/tags/tag_meta.asp -->
<meta charset="utf-8">
<meta name="description" content="Free random quotes generator, either inspirational or motivational.">
<meta name="keywords" content="quotes, random quotes, random quote generator">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Meta Tags End-->
<!-- Title (Change This If Publlic)-->
<title>Random Quote Generator | FierceCodes</title>
<!-- Link Custom Stylesheet And Fonts Start -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
<!-- Link Custom Stylesheet And Fonts End-->
<body>
<div class="download-fc">
<a href="https://fiercecodes.ga/random-quote-generator/" target="_blank">Download Source Code</a>
</div>
<!-- Start Container -->
<div class="wrapper">
<!-- Start Header -->
<header>
    Quote For <span id="getday"></span>
</header>
<!-- End Header -->
<!-- Start Content -->
<div class="content">
<div class="quote-area">
<i class="fas fa-quote-left"></i>
<p class="quote">Neither human applause nor human censure is to be taken as the best of truth; but either should set us upon testing ourselves.</p>
<i class="fas fa-quote-right"></i>
</div>
<div class="author">
<span>_</span>
<span class="name">Richard Whately</span>
</div>
</div>
<div class="buttons">
<div class="features">
<ul>
<li class="speech"><i class="fas fa-volume-up"></i></li>
<li class="copy" onclick="onCopy()"><i class="fas fa-copy"></i></li>
<li class="twitter"><i class="fab fa-twitter"></i></li>
</ul>
<button>Randomize</button>
</div>
</div>
</div>
<!-- End Content -->
<!-- Get Script-->
<script src="script.js">
</script>
</body>
</html>
<!-- Built by FierceCodes (https://fiercecodes.ga/) -->
```
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>Secondly, create a CSS file with the filename <code>style.css</code> and paste the following code into the file. <strong>Remember</strong>, you have to create a file with <code>.css</code> an extension at the last.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
```
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins,sans-serif
}
body{
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    padding:0 10px;
    background: #F54462;
    user-select: none;
}
::selection{
    color:#fff;
    background:#F09898;
}
.wrapper{
    width:605px;
    background:#fff;
    border-radius:15px;
    padding:30px 30px 25px;
    box-shadow:0 12px 35px rgba(0,0,0,.1)
}
header,.content :where(i,p,span){
    color:#102137
}
.wrapper header{
    font-size:35px;
    font-weight:600;
    text-align:center
}
.wrapper .content{
    margin:35px 0
}
.content .quote-area{
    display:flex;
}
.quote-area i{
    font-size:15px
}
.quote-area i:first-child{
    margin:3px 0 0 0
}
.quote-area i:last-child{
    display:flex;
    margin:0 0 3px 10px;
    align-items:flex-end;
}
.quote-area .quote{
    font-size:22px;
    text-align:center;
}
.content .author{
    display:flex;
    font-size:18px;
    margin-top:20px;
    font-style:italic;
    justify-content:flex-end
}
.author span:first-child{
    margin:-6px 5px 0 0;
    font-family:monospace;
}
.buttons .features{
    display:flex;
    margin-top:20px;
    align-items:center;
    justify-content:space-between;
}
.features ul{
    display:flex
}
.features ul li{
    margin:0 5px;
    height:47px;
    width:47px;
    display:flex;
    cursor:pointer;
    color:#F09898;
    list-style:none;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    border:2px solid #F09898;
    transition:all .3s ease
}
.features ul li:first-child{
    margin-left:0
}
ul li:is(:hover,.active){
    color:#fff;
    background:#F09898
}
ul .speech.active{
    pointer-events:none
}
.buttons button{
    border:none;
    color:#fff;
    outline:none;
    font-size:16px;
    cursor:pointer;
    padding:13px 22px;
    border-radius:15px;
    background:#F54462
}
.buttons button:hover{
    background: #F09898;
}
.buttons button.loading{
    opacity:.7;
    pointer-events:none
}
@media(max-width:728px){
    .wrapper{
        padding:25px 25px 20px;
        margin: 15px 15px 15px 15px;    
    }
    .wrapper header{
        font-size:29px
    }
    .quote-area .quote{
        font-size:20px;
        word-break:keep-all
    }
    .content .author{
        font-size:16px
    }
    .quote-area i{
        font-size:12px
    }
    .features ul li{
        margin:0 3px;
        height:45px;
        width:45px
    }
    .buttons button{
        font-size:15px;
        padding:12px 20px
    }
}
.download-fc{
    position: fixed;
    bottom: 40px;
    left: 40px;
    z-index: 99999;
  }
  .download-fc a{
    background: none;
    padding: 13px 22px;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    border: 2px solid #fff;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
  }
  .download-fc a:hover{
      color: #5372F0;
      background: #fff;
  }
  @media screen and (max-width: 728px){
      .download-fc{
          left: 20px;
      }
      .download-fc a{
          font-size: 13px;
          padding: 9px 15px;
      }
  }
```
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>Lo! Create a JavaScript file with a filename <code>script.js</code> and paste the following code into your JavaScript file. <strong>Remember</strong>, you have to create a file with <code>.js</code> an extension at last.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
```
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
```
  <!-- /wp:html -->

<!-- wp:paragraph -->
<p>With all that set in place, we’re ready to check the output of all three files combined to build a powerful webpage. It should do something like this by now:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","sizeSlug":"large"} -->
<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://i.imgur.com/RIdrboI.png" alt="Out Random Quote Generator"/><figcaption>Output (Original)</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>That’s it, you’ve now successfully built a Random Quote Generator Webpage in native HTML, CSS, and JavaScript.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If your code does not work or you have faced any problem/issue, try downloading the source files from the provided download button below.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s priceless and a <code>.zip</code> file that will be downloaded and then just extract it to your file manager, server, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"contentJustification":"center"} -->
<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"textColor":"base-3","style":{"border":{"radius":13},"color":{"background":"#7b1bd0"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-base-3-color has-text-color has-background" href="https://cutwin.com/random-quote-generator" style="border-radius:13px;background-color:#7b1bd0" target="_blank" rel="noreferrer noopener">Download Source Codes (External)</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
