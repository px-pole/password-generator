document.addEventListener("DOMContentLoaded", function () {
    // Array of all characters that can be used in the passwords
    const allCharacters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
        "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    // Subset of characters excluding special characters
    const alphanumericCharacters = allCharacters.slice(0, 62);

    // Reference to important DOM elements
    const generatePasswordsBtn = document.getElementById("generate-password-btn");
    const passwordOne = document.getElementById("password-one");
    const passwordTwo = document.getElementById("password-two");
    const passwordLengthInput = document.getElementById("password-length");
    const excludeSpecialCheckbox = document.getElementById("exclude-special");


    // Function to generate a random password
    function generateRandomPassword(length, excludeSpecial) {
        const characters = excludeSpecial ? alphanumericCharacters : allCharacters; // Decide which set of characters to use
        let password = ""; // Initialize an empty password string
        for (let i = 0; i < length; i++) {
            // Randomly select a character and append it to the password
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password; // Return the generated password
    }


    // Function to copy a password to the clipboard
    function copyToClipboard(targetId) {
        // Get the text content of the specified password field
        const textToCopy = document.getElementById(targetId).textContent;
        if (textToCopy) {
            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied: ${textToCopy}`); // Show success message
            }).catch(() => {
                alert('Failed to copy password.'); // Handle error
            });
        } else {
            alert('No password to copy!'); // Handle empty password case
        }
    }


    // Event listener for the "Generate Passwords" button
    generatePasswordsBtn.addEventListener("click", function () {
        const passwordLength = parseInt(passwordLengthInput.value, 10) || 15; // Get user-defined length or use 15 as default
        const excludeSpecial = excludeSpecialCheckbox.checked; // Check if special characters should be excluded

        // Generate and display passwords
        passwordOne.textContent = generateRandomPassword(passwordLength, excludeSpecial);
        passwordTwo.textContent = generateRandomPassword(passwordLength, excludeSpecial);
    });


    // Add click event listeners to all copy buttons
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target'); // Get the target password field
            copyToClipboard(targetId); // Call the copy function
        });
    });
});