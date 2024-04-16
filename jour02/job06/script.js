document.addEventListener("DOMContentLoaded", function() {
    let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let index = 0;

    document.addEventListener("keydown", function(event) {
        if (event.key === konamiCode[index]) {
            index++;
            if (index === konamiCode.length) {
                activateKonamiCode();
                index = 0;
            }
        } else {
            index = 0;
        }
    });

    function activateKonamiCode() {
        alert("Konami Code activated!");
        document.body.style.backgroundColor = 'blue';
    }
});
