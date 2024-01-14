const textarea = document.getElementById("_textarea");
const indicator = document.getElementById("_indicator");
const total = document.getElementById("_total");

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

function handleButtonClick(option, label, counterFunction) {
    whatIsCounted = option;
    indicator.innerHTML = label;
    document.getElementById("_result").innerHTML = counterFunction(textInput);
}

vowelBtn.addEventListener("click", () => handleButtonClick(options[0], "Vowel", countVowel));
consonantBtn.addEventListener("click", () => handleButtonClick(options[1], "Consonant", countConsonant));
numberBtn.addEventListener("click", () => handleButtonClick(options[2], "Number", countNumber));
wordBtn.addEventListener("click", () => handleButtonClick(options[3], "Word", countWord));
sentenceBtn.addEventListener("click", () => handleButtonClick(options[4], "Sentence", countSentence));
paragraphBtn.addEventListener("click", () => handleButtonClick(options[5], "Paragraph", countParagraph));
allBtn.addEventListener("click", () => handleButtonClick(options[6], "All", () => textInput.length));
symbolsBtn.addEventListener("click", () => handleButtonClick(options[7], "Symbols", countSymbols));

textarea.addEventListener("input", () => {
    textInput = textarea.value;
    total.innerHTML = textInput.length;

    switch (whatIsCounted) {
        case options[0]:
            document.getElementById("_result").innerHTML = countVowel(textInput);
            break;
        case options[1]:
            document.getElementById("_result").innerHTML = countConsonant(textInput);
            break;
        case options[2]:
            document.getElementById("_result").innerHTML = countNumber(textInput);
            break;
        case options[3]:
            document.getElementById("_result").innerHTML = countWord(textInput);
            break;
        case options[4]:
            document.getElementById("_result").innerHTML = countSentence(textInput);
            break;
        case options[5]:
            document.getElementById("_result").innerHTML = countParagraph(textInput);
            break;
        case options[6]:
            document.getElementById("_result").innerHTML = textInput.length;
            break;
        case options[7]:
            document.getElementById("_result").innerHTML = countSymbols(textInput);
            break;
        default:
            break;
    }

    if (textInput.length === 0) {
        indicator.innerHTML = "All";
        document.getElementById("_result").innerHTML = 0;
    }
});

function countVowel(text) {
    return text.split("").filter((char) => "aeiouAEIOU".includes(char)).length;
}

function countConsonant(text) {
    return text.split("").filter((char) => "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(char)).length;
}

function countNumber(text) {
    return text.split("").filter((char) => "0123456789".includes(char)).length;
}

function countWord(text) {
    return text.split(" ").filter((word) => word.trim() !== "").length;
}

function countSentence(text) {
    return text.split(".").filter((sentence) => sentence.trim() !== "").length;
}

function countParagraph(text) {
    return text.split("\n").filter((paragraph) => paragraph.trim() !== "").length;
}

function countSymbols(text) {
    return text.split("").filter((char) => "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/ ".includes(char)).length;
}
