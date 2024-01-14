const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const passwordText = document.getElementById("_passwordGenerated");
const showCopyCard = document.getElementById("_class");
const showCopyCardText = document.getElementById("_password");

function generatePassword(password, length) {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const character = Math.floor(Math.random() * password.length);
        generatedPassword += password.charAt(character);
    }
    return generatedPassword;
}

generateBtn.onclick = () => {
    const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const length = 12;

    passwordText.value = generatePassword(password, length);
};

copyBtn.onclick = () => {
    passwordText.select();

    if (passwordText.value === "") {
        alert("Please generate a password first");
        return;
    }

    document.execCommand("copy");
    showCopyCard.classList.add("active");
    setTimeout(() => {
        showCopyCard.classList.remove("active");
    }, 2000);
    _password.innerHTML = passwordText.value;

    passwordText.value = "";
};
