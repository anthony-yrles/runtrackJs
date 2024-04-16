// Function to log the key pressed in a textarea
document.addEventListener("DOMContentLoaded", function() {
    // creation of the textarea
    let textarea = document.getElementById('keylogger');

    // function to log the key pressed
    function keyLogger(event) {
        let key = event.key;
        if (document.activeElement === textarea) {
            textarea.textContent += key + key;
        } else {
            textarea.textContent += key;
        }
    }

    // event listener
    document.addEventListener('keypress', keyLogger);
});
