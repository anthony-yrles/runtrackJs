document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', () => {
        fetch('expression.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du fichier.');
                }
                return response.text();
            })
            .then(data => {
                const expressionContainer = document.getElementById('expressionContainer');
                expressionContainer.innerHTML = `<p>${data}</p>`;
            })
            .catch(error => {
                console.error('Une erreur est survenue :', error);
            });
    });
});