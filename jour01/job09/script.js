function tri(array, order) {
    if (order == "asc") {
        array.sort(function(a, b) {
            return a - b;
        });
    } else if (order == "desc") {
        array.sort(function(a, b) {
            return b - a;
        });
    }
    return array; // Retourne le tableau trié
}

console.log(tri([3, 5, 1, 8, 9, 2], "asc"));
console.log(tri([3, 5, 1, 8, 9, 2], "desc"));
console.log(tri([3, 5, 1, 8, 9, 2], "asc"));
