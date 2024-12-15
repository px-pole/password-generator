document.addEventListener("DOMContentLoaded", function () {

    const characters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
        "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    let generatePasswordsBtn = document.getElementById("generate-password-btn");
    let passwordOne = document.getElementById("password-one");
    let passwordTwo = document.getElementById("password-two");

    function generateRandomPassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    generatePasswordsBtn.addEventListener("click", function () {
        console.log("Button clicked");
        const passwordLength = 15;
        passwordOne.textContent = generateRandomPassword(passwordLength);
        passwordTwo.textContent = generateRandomPassword(passwordLength);
    });
});
