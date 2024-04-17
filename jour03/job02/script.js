$(document).ready(function() {
    const rainbow = $("#rainbow");
    const shuffleButton = $("#shuffleButton");
    const checkButton = $("#verify");
    const message = $("#message");

    // Function to shuffle the images
    shuffleButton.click(function() {
        for (let i = rainbow.children().length; i >= 0; i--) {
            rainbow.append(rainbow.children().eq(Math.random() * i | 0));
        }
        message.text("");
    });

    // Function to check if the images are in the right order
    checkButton.click(function() {
        let sorted = true;
        rainbow.children().each(function(index, element) {
            let expectedAlt = index + 1;
            if ($(element).attr("alt") !== expectedAlt.toString()) {
                sorted = false;
                return false;
            }
        });
        if (sorted) {
            message.text("Félicitations, vous avez gagné !");
        } else {
            message.text("Essayez à nouveau !");
        }
    });

    // Activate the drag and drop
    let dragged;
    rainbow.on("dragstart", "img", function(event) {
        dragged = $(this);
    });

    rainbow.on("dragover", function(event) {
        event.preventDefault();
    });

    rainbow.on("drop", "img", function(event) {
        event.preventDefault();
        let target = $(event.target);
        dragged.detach().insertBefore(target);
    });
});
