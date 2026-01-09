const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("generate-password").addEventListener("click", function() {
        let passwordOutput = generatePassword(8)
        document.getElementById("password-output").textContent = passwordOutput;
        document.getElementById("copy-password").style.display = "inline-block";
    });
});