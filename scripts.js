document.addEventListener("DOMContentLoaded", function () {
    const allCharacters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
        "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    const alphanumericCharacters = allCharacters.slice(0, 62);
    const generatePasswordsBtn = document.getElementById("generate-password-btn");
    const passwordOne = document.getElementById("password-one");
    const passwordTwo = document.getElementById("password-two");
    const passwordLengthInput = document.getElementById("password-length");
    const excludeSpecialCheckbox = document.getElementById("exclude-special");

    function generateRandomPassword(length, excludeSpecial) {
        const characters = excludeSpecial ? alphanumericCharacters : allCharacters;
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    generatePasswordsBtn.addEventListener("click", function () {
        const passwordLength = parseInt(passwordLengthInput.value, 10) || 15;
        const excludeSpecial = excludeSpecialCheckbox.checked;

        passwordOne.textContent = generateRandomPassword(passwordLength, excludeSpecial);
        passwordTwo.textContent = generateRandomPassword(passwordLength, excludeSpecial);
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            copyToClipboard(targetId);
        });
    });
});