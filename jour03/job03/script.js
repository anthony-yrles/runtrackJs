$(document).ready(function() {
    const tiles = $(".tile");
    const restartButton = $("#restartButton");
    const message = $("#message");

    let gameLocked = false;
    let tilesArray;

    // Use the shuffleTiles function to shuffle the tiles when the page is loaded
    shuffleTiles();

    // Function to shuffle the tiles
    function shuffleTiles() {
        tilesArray = tiles.toArray();
        for (let i = tilesArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tilesArray[i];
            tilesArray[i] = tilesArray[j];
            tilesArray[j] = temp;
        }
        $("#puzzle").empty().append(tilesArray);
        tiles.click(moveTile);
        message.text("");
        gameLocked = false;
    
        return tilesArray; // Return shuffled tiles array
    }

    // Function to move a tile
    function moveTile() {
        if (gameLocked) return;
        let tile = $(this);
        
        // Get tile position in the 3x3 grid
        let tilePosition = getGridPosition(tile, tilesArray);

        // Get empty tile position in the 3x3 grid
        let emptyTilePosition = getGridPosition($("#empty"), tilesArray);

        // Check if the tile is adjacent to the empty tile
        if (isAdjacent(tilePosition, emptyTilePosition)) {
            // Move the tile
            tiles.eq(tilePosition).insertBefore($("#empty"));
            // Swap IDs between the tile and the empty tile
            $("#empty").attr("id", tile.attr("id"));
            tile.attr("id", "empty");

            checkWin();
        }
    }

    // Function to get the position of a tile in the 3x3 grid
    function getGridPosition(tile, tilesArray) {
        let tileIndex = tilesArray.indexOf(tile[0]);
        let row = Math.floor(tileIndex / 3) + 1;
        let col = (tileIndex % 3) + 1;
        return { row: row, col: col };
    }

    // Function to check if the tiles are in the correct order
    function checkWin() {
        let correctOrder = true;
        tiles.each(function(index) {
            if ($(this).attr("id") !== "tile" + (index + 1)) {
                correctOrder = false;
                return false;
            }
        });
        if (correctOrder) {
            message.text("Vous avez gagné !");
            message.css("color", "green");
            gameLocked = true;
            restartButton.show();
        }
    }

    // Click event for the restart button
    restartButton.click(function() {
        tilesArray = shuffleTiles(); // Update tilesArray with shuffled tiles
        restartButton.hide();
    });
});
