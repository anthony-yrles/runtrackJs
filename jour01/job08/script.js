function sommeNombresPremiers(nombre_1, nombre_2) {
    // Check if the numbers are prime
    for(let i = 2; i < nombre_1; i++)
        if(nombre_1%i === 0) 
            return false;
        for(let i = 2; i < nombre_2; i++)
            if(nombre_2%i === 0) 
                return false;
    // Return the sum of the numbers if they are prime
    return nombre_1 + nombre_2;
}

console.log(sommeNombresPremiers(2, 3));
console.log(sommeNombresPremiers(2, 4));
console.log(sommeNombresPremiers(2, 5));
console.log(sommeNombresPremiers(6432, 6433));
console.log(sommeNombresPremiers(17, 17));
