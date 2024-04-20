document.addEventListener('DOMContentLoaded', function () {

    let button = document.getElementById("submit");

    function filtrerPokemon() {
        var formData = new FormData(document.getElementById("pokemonFilterForm"));
        var url = "pokemon.json";
        var resultatDiv = document.getElementById("resultat");
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var filteredPokemon = data.filter(pokemon => {
                if (formData.get("id") && pokemon.id != parseInt(formData.get("id"))) {
                    return false;
                }
                return true;
            });
    
            resultatDiv.innerHTML = "<h2>Résultats:</h2>";
            if (filteredPokemon.length === 0) {
                resultatDiv.innerHTML += "<p>Aucun Pokémon trouvé.</p>";
            } else {
                filteredPokemon.forEach(pokemon => {
                    resultatDiv.innerHTML += "<p>ID: " + pokemon.id + ", Nom: " + pokemon.name.english + ", Type: " + pokemon.type.join(", ") + "</p>";
                });
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
            resultatDiv.innerHTML = "<p>Une erreur s'est produite lors du filtrage des Pokémon.</p>";
        });
    }
    button.addEventListener("click", filtrerPokemon);
});

// var filteredPokemonByNom = filteredPokemonById.filter(pokemon => {
//     // Vérifiez si les critères de filtrage sont satisfaits
//     if (formData.get("nom") && !pokemon.nom.toLowerCase().includes(formData.get("nom").toLowerCase())) {
//         return false;
//     }
//     return true;
// });