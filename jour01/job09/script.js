function tri(array, order) {
    //  If the order is ascending, sort the array in ascending order
    if (order == "asc") {
        array.sort(function(a, b) {
            return a - b;
        });
    // If the order is descending, sort the array in descending order
    } else if (order == "desc") {
        array.sort(function(a, b) {
            return b - a;
        });
    }
    // Return the sorted array
    return array;
}

console.log(tri([3, 5, 1, 8, 9, 2], "asc"));
console.log(tri([3, 5, 1, 8, 9, 2], "desc"));
console.log(tri([3, 5, 1, 8, 9, 2], "asc"));
