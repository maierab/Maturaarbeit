KARTEN = [
    {"kana_representation": "あ", "latin_representation": "a"}, 
    {"kana_representation": "い", "latin_representation": "i"}, 
    {"kana_representation": "う", "latin_representation": "u"}, 
    {"kana_representation": "え", "latin_representation": "e"}, 
    {"kana_representation": "お", "latin_representation": "o"}, 

    {"kana_representation": "か", "latin_representation": "ka"}, 
    {"kana_representation": "き", "latin_representation": "ki"}, 
    {"kana_representation": "く", "latin_representation": "ku"}, 
    {"kana_representation": "け", "latin_representation": "ke"}, 
    {"kana_representation": "こ", "latin_representation": "ko"}, 

    {"kana_representation": "さ", "latin_representation": "sa"}, 
    {"kana_representation": "し", "latin_representation": "shi"}, 
    {"kana_representation": "す", "latin_representation": "su"}, 
    {"kana_representation": "せ", "latin_representation": "se"}, 
    {"kana_representation": "そ", "latin_representation": "so"}, 

    {"kana_representation": "た", "latin_representation": "ta"}, 
    {"kana_representation": "ち", "latin_representation": "chi"}, 
    {"kana_representation": "つ", "latin_representation": "tsu"}, 
    {"kana_representation": "て", "latin_representation": "te"}, 
    {"kana_representation": "と", "latin_representation": "to"}, 

    {"kana_representation": "な", "latin_representation": "na"}, 
    {"kana_representation": "に", "latin_representation": "ni"}, 
    {"kana_representation": "ぬ", "latin_representation": "nu"}, 
    {"kana_representation": "ね", "latin_representation": "ne"}, 
    {"kana_representation": "の", "latin_representation": "no"}, 

    {"kana_representation": "は", "latin_representation": "ha"}, 
    {"kana_representation": "ひ", "latin_representation": "hi"}, 
    {"kana_representation": "ふ", "latin_representation": "fu"}, 
    {"kana_representation": "へ", "latin_representation": "he"}, 
    {"kana_representation": "ほ", "latin_representation": "ho"}, 

    {"kana_representation": "ま", "latin_representation": "ma"}, 
    {"kana_representation": "み", "latin_representation": "mi"}, 
    {"kana_representation": "む", "latin_representation": "mu"}, 
    {"kana_representation": "め", "latin_representation": "me"}, 
    {"kana_representation": "も", "latin_representation": "mo"}, 

    {"kana_representation": "や", "latin_representation": "ya"}, 
    {"kana_representation": "ゆ", "latin_representation": "yu"}, 
    {"kana_representation": "よ", "latin_representation": "yo"}, 

    {"kana_representation": "ら", "latin_representation": "ra"}, 
    {"kana_representation": "り", "latin_representation": "ri"}, 
    {"kana_representation": "る", "latin_representation": "ru"}, 
    {"kana_representation": "れ", "latin_representation": "re"}, 
    {"kana_representation": "ろ", "latin_representation": "ro"},
    
    {"kana_representation": "わ", "latin_representation": "wa"}, 
    {"kana_representation": "を", "latin_representation": "wo"}, 

    {"kana_representation": "ん", "latin_representation": "n"}, 


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

var index = -1;
var flippied = false;

function next() {
    if (index + 1 < KARTEN.length) {
        index = index + 1;
        flippied = false
        document.getElementById("card").innerHTML = KARTEN[index].latin_representation;
    }
}

function prev() {
    if (index > 0) {
        index = index - 1;
        flippied = false
        document.getElementById("card").innerHTML = KARTEN[index].latin_representation;
    }
}

function flip() {
    flippied = !flippied;
    if (flippied) {
        document.getElementById("card").innerHTML = KARTEN[index].kana_representation;
    } else {
        document.getElementById("card").innerHTML = KARTEN[index].latin_representation;
    }
}

window.onload = function() {
    next();
};

document.addEventListener('keydown', (e) => {
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
});