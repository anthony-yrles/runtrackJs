// Function: display the text of the button when it is clicked
document.addEventListener("DOMContentLoaded", function() {

    // creation of the button and the text
    let button = document.getElementById('button');
    let text = document.getElementById('citation');

    // function to display the text
    function citation() {
        console.log(text.textContent);
    }

    // event listener
    button.addEventListener('click', citation);
});
