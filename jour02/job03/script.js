// Function: The function will count the number of clicks on the button and display it in the paragraph
document.addEventListener("DOMContentLoaded", function() {

    // creation of the button and the text
    let button = document.getElementById('button');
    let paragraphe = document.getElementById('compteur');

    // function to display the text
    function countClicks() {
        let count = parseInt(paragraphe.textContent);
        count++;
        paragraphe.textContent = count;
    }
    
    // event listener
    button.addEventListener('click', countClicks);
});

