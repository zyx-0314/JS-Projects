const textarea = document.getElementById("_textarea");
const indicator = document.getElementById("_indicator");

const vowelBtn = document.getElementById("_vowelChecker");
const consonantBtn = document.getElementById("_consonantChecker");
const numberBtn = document.getElementById("_numberChecker");
const wordBtn = document.getElementById("_wordChecker");
const sentenceBtn = document.getElementById("_sentenceChecker");
const paragraphBtn = document.getElementById("_paragraphChecker");
const allBtn = document.getElementById("_allChecker");
const symbolsBtn = document.getElementById("_symbolsChecker");

let textInput;
let whatIsCounted = "all";
const options = ["vowel", "consonant", "number", "word", "sentence", "paragraph", "all", "symbols"];

textarea.addEventListener("input", () => {
    textInput = textarea.value;
    document.getElementById("_total").innerHTML = textInput.length;

    if (whatIsCounted === "all") {
        document.getElementById("_result").innerHTML = textInput.length;
    } else if (whatIsCounted === "vowel") {
        document.getElementById("_result").innerHTML = countVowel(textInput);
    } else if (whatIsCounted === "consonant") {
        document.getElementById("_result").innerHTML = countConsonant(textInput);
    } else if (whatIsCounted === "number") {
        document.getElementById("_result").innerHTML = countNumber(textInput);
    } else if (whatIsCounted === "word") {
        document.getElementById("_result").innerHTML = countWord(textInput);
    } else if (whatIsCounted === "sentence") {
        document.getElementById("_result").innerHTML = countSentence(textInput);
    } else if (whatIsCounted === "paragraph") {
        document.getElementById("_result").innerHTML = countParagraph(textInput);
    } else if (whatIsCounted === "symbols") {
        document.getElementById("_result").innerHTML = countSymbols(textInput);
    }
});

vowelBtn.addEventListener("click", () => {
    whatIsCounted = options[0];
    indicator.innerHTML = "Vowel";
    document.getElementById("_result").innerHTML = countVowel(textInput);
});

consonantBtn.addEventListener("click", () => {
    whatIsCounted = options[1];
    indicator.innerHTML = "Consonant";
    document.getElementById("_result").innerHTML = countConsonant(textInput);
});

numberBtn.addEventListener("click", () => {
    whatIsCounted = options[2];
    indicator.innerHTML = "Number";
    document.getElementById("_result").innerHTML = countNumber(textInput);
});

wordBtn.addEventListener("click", () => {
    whatIsCounted = options[3];
    indicator.innerHTML = "Word";
    document.getElementById("_result").innerHTML = countWord(textInput);
});

sentenceBtn.addEventListener("click", () => {
    whatIsCounted = options[4];
    indicator.innerHTML = "Sentence";
    document.getElementById("_result").innerHTML = countSentence(textInput);
});

paragraphBtn.addEventListener("click", () => {
    whatIsCounted = options[5];
    indicator.innerHTML = "Paragraph";
    document.getElementById("_result").innerHTML = countParagraph(textInput);
});

allBtn.addEventListener("click", () => {
    whatIsCounted = options[6];
    indicator.innerHTML = "All";
    document.getElementById("_result").innerHTML = textInput.length;
});

symbolsBtn.addEventListener("click", () => {
    whatIsCounted = options[7];
    indicator.innerHTML = "Symbols";
    document.getElementById("_result").innerHTML = countSymbols(textInput);
});

function countVowel(text) {
    let count = 0;
    const vowel = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
        if (vowel.indexOf(text[i]) !== -1) {
            count++;
        }
    }

    return count;
}

function countConsonant(text) {
    let count = 0;
    const consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

    for (let i = 0; i < text.length; i++) {
        if (consonant.indexOf(text[i]) !== -1) {
            count++;
        }
    }

    return count;
}

function countNumber(text) {
    let count = 0;
    const number = "0123456789";

    for (let i = 0; i < text.length; i++) {
        if (number.indexOf(text[i]) !== -1) {
            count++;
        }
    }

    return count;
}

function countWord(text) {
    let count = 0;
    const word = text.split(" ");

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "") {
            count++;
        }
    }

    return count;
}

function countSentence(text) {
    let count = 0;
    const sentence = text.split(".");

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== "") {
            count++;
        }
    }

    return count;
}

function countParagraph(text) {
    let count = 0;
    const paragraph = text.split("\n");

    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] !== "") {
            count++;
        }
    }

    return count;
}

function countSymbols(text) {
    let count = 0;
    const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

    for (let i = 0; i < text.length; i++) {
        if (symbols.indexOf(text[i]) !== -1) {
            count++;
        }
    }

    return count;
}
