function typeEffect(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Pega os elementos
const nameElement = document.getElementById("typing-name");
const roleElement = document.getElementById("typing-role");

// Aplica o efeito
typeEffect(nameElement, "Silmara Bittencourt", 100, function() {
});