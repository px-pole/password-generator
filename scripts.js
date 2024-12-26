// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Define all possible characters for password generation
    const allCharacters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
        "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    // Define alphanumeric characters (excluding special characters)
    const alphanumericCharacters = allCharacters.slice(0, 62);

    // Get references to HTML elements
    const generatePasswordsBtn = document.getElementById("generate-password-btn");
    const passwordOne = document.getElementById("password-one");
    const passwordTwo = document.getElementById("password-two");
    const passwordLengthInput = document.getElementById("password-length");
    const excludeSpecialCheckbox = document.getElementById("exclude-special");

    // Function to generate a random password
    function generateRandomPassword(length, excludeSpecial) {
        // Choose character set based on whether to exclude special characters
        const characters = excludeSpecial ? alphanumericCharacters : allCharacters;
        let password = "";
        // Generate password by randomly selecting characters
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Function to copy a password to the clipboard
    function copyToClipboard(targetId) {
        const textToCopy = document.getElementById(targetId).textContent;
        if (textToCopy) {
            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied: ${textToCopy}`);
            }).catch(() => {
                alert('Failed to copy password.');
            });
        } else {
            alert('No password to copy!');
        }
    }

    // Event listener for the "Generate Passwords" button
    generatePasswordsBtn.addEventListener("click", function () {
        // Get the desired password length, default to 15 if not specified
        const passwordLength = parseInt(passwordLengthInput.value, 10) || 15;

        // Ensure password length is within acceptable range
        if (passwordLength < 6) {
            alert("Password length must be at least 6 characters.");
            passwordLength = 6;
        } else if (passwordLength > 42) {
            alert("Password length must not exceed 42 characters.");
            passwordLength = 42;
        }

        // Check if special characters should be excluded
        const excludeSpecial = excludeSpecialCheckbox.checked;

        // Generate and display two random passwords
        passwordOne.textContent = generateRandomPassword(passwordLength, excludeSpecial);
        passwordTwo.textContent = generateRandomPassword(passwordLength, excludeSpecial);
    });

    // Add click event listeners to all copy buttons
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function () {
            // Get the ID of the password element to copy
            const targetId = this.getAttribute('data-target');
            copyToClipboard(targetId);
        });
    });
});
