// Function: display the text of the button when it is clicked
document.addEventListener("DOMContentLoaded", function() {
    // creation of the button and the text
    let button = document.getElementById('button');

    // function to display the text
    function showHide() {
        let text = document.getElementById('citation');
        if (text.style.display === 'none') {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    }
    // event listener
    button.addEventListener('click', showHide);
});