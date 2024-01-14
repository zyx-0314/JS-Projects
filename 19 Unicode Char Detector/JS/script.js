const detect = document.getElementById("_btn");
const input = document.getElementById("_input");
const result = document.getElementById("result");

detect.addEventListener("click", () => {
    if (input.value.length === 0) {
        result.innerHTML = "Please enter a character";
        return;
    }
    result.innerHTML = isUnicodeText(input.value) ? "Unicode" : "ASCII";
});

isUnicodeText = (text) => {
    return text.codePointAt(0) > 127;
};
