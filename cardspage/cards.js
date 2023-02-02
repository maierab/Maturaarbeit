KARTEN = [
    {"kana_representation": "あ", "latin_representation": "a", "category": "basic"}, 
    {"kana_representation": "い", "latin_representation": "i", "category": "basic"}, 
    {"kana_representation": "う", "latin_representation": "u", "category": "basic"}, 
    {"kana_representation": "え", "latin_representation": "e", "category": "basic"}, 
    {"kana_representation": "お", "latin_representation": "o", "category": "basic"}, 

    {"kana_representation": "か", "latin_representation": "ka", "category": "basic"}, 
    {"kana_representation": "き", "latin_representation": "ki", "category": "basic"}, 
    {"kana_representation": "く", "latin_representation": "ku", "category": "basic"}, 
    {"kana_representation": "け", "latin_representation": "ke", "category": "basic"}, 
    {"kana_representation": "こ", "latin_representation": "ko", "category": "basic"}, 

    {"kana_representation": "さ", "latin_representation": "sa", "category": "basic"}, 
    {"kana_representation": "し", "latin_representation": "shi", "category": "basic"}, 
    {"kana_representation": "す", "latin_representation": "su", "category": "basic"}, 
    {"kana_representation": "せ", "latin_representation": "se", "category": "basic"}, 
    {"kana_representation": "そ", "latin_representation": "so", "category": "basic"}, 

    {"kana_representation": "た", "latin_representation": "ta", "category": "basic"}, 
    {"kana_representation": "ち", "latin_representation": "chi", "category": "basic"}, 
    {"kana_representation": "つ", "latin_representation": "tsu", "category": "basic"}, 
    {"kana_representation": "て", "latin_representation": "te", "category": "basic"}, 
    {"kana_representation": "と", "latin_representation": "to", "category": "basic"}, 

    {"kana_representation": "な", "latin_representation": "na", "category": "basic"}, 
    {"kana_representation": "に", "latin_representation": "ni", "category": "basic"}, 
    {"kana_representation": "ぬ", "latin_representation": "nu", "category": "basic"}, 
    {"kana_representation": "ね", "latin_representation": "ne", "category": "basic"}, 
    {"kana_representation": "の", "latin_representation": "no", "category": "basic"}, 

    {"kana_representation": "は", "latin_representation": "ha", "category": "basic"}, 
    {"kana_representation": "ひ", "latin_representation": "hi", "category": "basic"}, 
    {"kana_representation": "ふ", "latin_representation": "fu", "category": "basic"}, 
    {"kana_representation": "へ", "latin_representation": "he", "category": "basic"}, 
    {"kana_representation": "ほ", "latin_representation": "ho", "category": "basic"}, 

    {"kana_representation": "ま", "latin_representation": "ma", "category": "basic"}, 
    {"kana_representation": "み", "latin_representation": "mi", "category": "basic"}, 
    {"kana_representation": "む", "latin_representation": "mu", "category": "basic"}, 
    {"kana_representation": "め", "latin_representation": "me", "category": "basic"}, 
    {"kana_representation": "も", "latin_representation": "mo", "category": "basic"}, 

    {"kana_representation": "や", "latin_representation": "ya", "category": "basic"}, 
    {"kana_representation": "ゆ", "latin_representation": "yu", "category": "basic"}, 
    {"kana_representation": "よ", "latin_representation": "yo", "category": "basic"}, 

    {"kana_representation": "ら", "latin_representation": "ra", "category": "basic"}, 
    {"kana_representation": "り", "latin_representation": "ri", "category": "basic"}, 
    {"kana_representation": "る", "latin_representation": "ru", "category": "basic"}, 
    {"kana_representation": "れ", "latin_representation": "re", "category": "basic"}, 
    {"kana_representation": "ろ", "latin_representation": "ro", "category": "basic"},
    
    {"kana_representation": "わ", "latin_representation": "wa", "category": "basic"}, 
    {"kana_representation": "を", "latin_representation": "wo", "category": "basic"}, 

    {"kana_representation": "ん", "latin_representation": "n", "category": "basic"}, 


    {"kana_representation": "が", "latin_representation": "ga", "category": "voiced"}, 
    {"kana_representation": "ぎ", "latin_representation": "gi", "category": "voiced"}, 
    {"kana_representation": "ぐ", "latin_representation": "gu", "category": "voiced"}, 
    {"kana_representation": "げ", "latin_representation": "ge", "category": "voiced"}, 
    {"kana_representation": "ご", "latin_representation": "go", "category": "voiced"}, 

    {"kana_representation": "ざ", "latin_representation": "za", "category": "voiced"}, 
    {"kana_representation": "じ", "latin_representation": "ji", "category": "voiced"}, 
    {"kana_representation": "ず", "latin_representation": "zu", "category": "voiced"}, 
    {"kana_representation": "ぜ", "latin_representation": "ze", "category": "voiced"}, 
    {"kana_representation": "ぞ", "latin_representation": "zo", "category": "voiced"}, 
   
    {"kana_representation": "だ", "latin_representation": "da", "category": "voiced"}, 
    {"kana_representation": "ぢ", "latin_representation": "ji", "category": "voiced"}, 
    {"kana_representation": "づ", "latin_representation": "zu", "category": "voiced"}, 
    {"kana_representation": "で", "latin_representation": "de", "category": "voiced"}, 
    {"kana_representation": "ど", "latin_representation": "do", "category": "voiced"}, 
    
    {"kana_representation": "ば", "latin_representation": "ba", "category": "voiced"}, 
    {"kana_representation": "び", "latin_representation": "bi", "category": "voiced"}, 
    {"kana_representation": "ぶ", "latin_representation": "bu", "category": "voiced"}, 
    {"kana_representation": "べ", "latin_representation": "be", "category": "voiced"}, 
    {"kana_representation": "ぼ", "latin_representation": "bo", "category": "voiced"}, 

    {"kana_representation": "ぱ", "latin_representation": "pa", "category": "voiced"}, 
    {"kana_representation": "ぴ", "latin_representation": "pi", "category": "voiced"}, 
    {"kana_representation": "ぷ", "latin_representation": "pu", "category": "voiced"}, 
    {"kana_representation": "ぺ", "latin_representation": "pe", "category": "voiced"}, 
    {"kana_representation": "ぽ", "latin_representation": "po", "category": "voiced"}, 
];

const KARTEN_ORIGINAL = KARTEN.slice();

var index = -1;
var flippied = false;

function loadConfig() {
    document.getElementById("slider-option-shuffled").checked = (localStorage.getItem("shuffled") ?? "false") === "true";
    document.getElementById("slider-option-onlyvoiced").checked = (localStorage.getItem("onlyvoiced") ?? "false") === "true";
    document.getElementById("slider-option-onlybasic").checked = (localStorage.getItem("onlybasic") ?? "false") === "true";
    document.getElementById("slider-option-both").checked = !document.getElementById("slider-option-onlyvoiced").checked && !document.getElementById("slider-option-onlybasic").checked;

    updateCards();
}

function saveConfig() {
    localStorage.setItem("shuffled", document.getElementById("slider-option-shuffled").checked.toString());
    localStorage.setItem("onlybasic", document.getElementById("slider-option-onlybasic").checked.toString());
    localStorage.setItem("onlyvoiced", document.getElementById("slider-option-onlyvoiced").checked.toString());
}

function next() {
    if (index + 1 < KARTEN.length) {
        index = index + 1;
        updateCardText();
        document.getElementById("progress-tracker").innerText = index + 1 + "/" + KARTEN.length;
    }
}

function prev() {
    if (index > 0) {
        index = index - 1;
        updateCardText();
        document.getElementById("progress-tracker").innerText = index + 1 + "/" + KARTEN.length;
    }
}

function updateCardText() {
    if (!flippied) {
        document.getElementById("card-front").innerHTML = KARTEN[index].kana_representation;
        document.getElementById("card-back").innerHTML = KARTEN[index].latin_representation;
    } else {
        document.getElementById("card-front").innerHTML = KARTEN[index].latin_representation;
        document.getElementById("card-back").innerHTML = KARTEN[index].kana_representation;
    }
}

function flip() {
    flippied = !flippied;
    if (flippied) {
        document.getElementById("flip-card-inner").classList.add("flip-card-inner-flipped");
    } else {
        document.getElementById("flip-card-inner").classList.remove("flip-card-inner-flipped");
    }
}

window.onload = function() {
    loadConfig();
    next();
    document.getElementById("flip-card-everything").addEventListener("click", flip); //had to put this here cause the id doesnt exist until it has loaded in
};

document.addEventListener('keydown', (e) => {
    if (document.getElementById("settings-menu").style.display !== "none") {
        //settings menu is open
        return;
    }

    if (e.code === "Space") {
        flip();
    }
    if (e.code === "ArrowDown") {
        flip();
    }
    if (e.code === "ArrowUp") {
        flip();
    }
    if (e.code === "ArrowRight") {
        next();
    }
    if (e.code === "ArrowLeft") {
        prev();
    }
    if (e.code === "Escape") {
        closeSettings();
    }
});

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX - 30) next(); //for left swipes
  if (touchendX > touchstartX + 30) prev(); //for right swipes
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function openSettings() {
    document.getElementById("settings-menu").style.display = "block";
}

function closeSettings() {
    document.getElementById("settings-menu").style.display = "none";
}

function configUpdated() {
    saveConfig();
    updateCards();

    index = -1;
    next();
}

function updateCards() {
    let karten = cloneArray(KARTEN_ORIGINAL);

    //if onlybasic is enabled, filter out all the cards that are not basic
    if (document.getElementById("slider-option-onlybasic").checked) {
        karten = karten.filter(card => card.category === "basic");
    }

    //if onlyvoiced is enabled, filter out all the cards that are not voiced
    if (document.getElementById("slider-option-onlyvoiced").checked) {
        karten = karten.filter(card => card.category === "voiced");
    }

    //if shuffle is enabled, shuffle the array
    if (document.getElementById("slider-option-shuffled").checked) {
        karten = shuffleArray(karten);
    }

    KARTEN = karten;
}

function cloneArray(array) {
    return array.slice();
}

function shuffleArray(array) {
    array = cloneArray(array);

    for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


