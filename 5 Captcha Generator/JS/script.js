const display = document.getElementById("_status");
const body = document.body;
const submitBtn = document.getElementById("_submit");
const refreshBtn = document.getElementById("_refresh");

const codeCharactersString = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let code = "";

body.onload = () => {
    console.log("Loading");
    const codeLength = 5;

    for (let index = 0; index < codeLength; index++) {
        const randomIndex = Math.floor(Math.random() * codeCharactersString.length);

        code += codeCharactersString.substring(randomIndex, randomIndex + 1);
    }

    document.getElementById("_generator").value = code;
    display.innerText = "Code Generator";
};

submitBtn.onclick = () => {
    const input = document.getElementById("_client-text").value;

    if (input === "") {
        display.innerText = "Please Enter the text Shown below👇";
    } else if (input === code) {
        display.innerText = "Matched😎";
    } else {
        display.innerText = "Not-Matched😖";
    }
};

refreshBtn.onclick = () => {
    let newCode = "";
    for (let index = 0; index < code.length; index++) {
        console.log("refresh");
        const randomCode = codeCharactersString[Math.floor(Math.random() * codeCharactersString.length)];
        newCode += randomCode;
    }

    code = newCode;
    document.getElementById("_generator").value = code;
    display.innerText = "Code Generator1";
};
