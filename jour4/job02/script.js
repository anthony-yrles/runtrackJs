function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);
        
        // Vérifier si la clé existe dans l'objet
        if (key in jsonObject) {
            // Retourner la valeur associée à la clé
            return jsonObject[key];
        } else {
            // Si la clé n'existe pas, retourner null ou une autre valeur par défaut selon le cas
            return null;
        }
    } catch (error) {
        // Si une erreur se produit lors de l'analyse du JSON, afficher un message d'erreur
        console.error('Une erreur est survenue lors de l\'extraction de la valeur :', error);
        return null; // ou lancer une exception selon le cas
    }
}

// Exemple d'utilisation de la fonction
const jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
const key = 'city';
const value = jsonValueKey(jsonString, key);
console.log('La valeur associée à la clé', key, 'est :', value);
