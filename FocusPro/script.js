document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.querySelector("#download .cta-button");
    
    downloadButton.addEventListener("click", function () {
        alert("Obrigado por baixar o FocusPro! Seu download começará em breve.");
    });
});