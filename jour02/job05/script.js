// Function: Change the background color of the footer in function of the scroll position
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');

    window.addEventListener('scroll', function() {
        // Get the scroll position
        let scrollTop = window.scrollY;
        // Get the scroll percentage
        let scrollPercent = scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;

        // Select color in function of the scroll
        let red = Math.min(255, scrollPercent); // Limite rouge à 255
        let green = Math.min(255, scrollPercent); // Limite verte à 255
        let blue = Math.min(255, scrollPercent); // Limite bleue à 255

        // Chancge background color of the footer
        footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});

