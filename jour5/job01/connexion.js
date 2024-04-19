document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('connexionForm');
    const nameInput = document.getElementById('nom');
    const firstNameInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const adressInput = document.getElementById('adresse');
    const codePostalInput = document.getElementById('codePostal');

    // Ajoutez des écouteurs d'événements pour chaque champ de formulaire
    nameInput.addEventListener('input', function () {
        validateName(nameInput.value);
    });

    firstNameInput.addEventListener('input', function () {
        validateFirstName(firstNameInput.value);
    });
    
    emailInput.addEventListener('input', function () {
        validateEmail(emailInput.value);
    });

    passwordInput.addEventListener('input', function () {
        validatePassword(passwordInput.value);
    });

    adressInput.addEventListener('input', function () {
        validateAdress(adressInput.value);
    });

    codePostalInput.addEventListener('input', function () {
        validateCodePostal(codePostalInput.value);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateEmail(emailInput.value) && validatePassword(passwordInput.value) && validateName(nameInput.value) && validateFirstName(firstNameInput.value) && validateAdress(adressInput.value) && validateCodePostal(codePostalInput.value)) {
            // Si la validation réussit, vous pouvez soumettre le formulaire
            form.submit();
        }
    });

    function validateName(name) {
        const nameError = document.getElementById('nomError');
        if (!name) {
            nameError.textContent = 'Veuillez entrer votre nom.';
            return false;
        } else if (name.length < 2) {
            nameError.textContent = 'Le nom doit contenir au moins 2 caractères.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateFirstName(firstName) {
        const firstNameError = document.getElementById('prenomError');
        if (!firstName) {
            firstNameError.textContent = 'Veuillez entrer votre prénom.';
            return false;
        } else if (firstName.length < 2) {
            firstNameError.textContent = 'Le prénom doit contenir au moins 2 caractères.';
            return false;
        } else {
            firstNameError.textContent = '';
            return true;
        }
    }

    function validateEmail(email) {
        const emailError = document.getElementById('emailError');
        if (!email) {
            emailError.textContent = 'Veuillez entrer votre adresse email.';
            return false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Veuillez entrer une adresse email valide.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
    
    function isValidEmail(email) {
        // Utilisation d'une expression régulière pour valider l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }    

    function validatePassword(password) {
        const passwordError = document.getElementById('passwordError');
        if (!password) {
            passwordError.textContent = 'Veuillez entrer votre mot de passe.';
            return false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
            return false;
        } else if (!containsSpecialCharacter(password)) {
            passwordError.textContent = 'Le mot de passe doit contenir au moins un caractère spécial.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }
    
    function containsSpecialCharacter(password) {
        // Utilisation d'une expression régulière pour vérifier la présence de caractères spéciaux
        const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return specialCharacterRegex.test(password);
    }

    function validateAdress(adress) {
        const adressError = document.getElementById('adresseError');
        if (!adress) {
            adressError.textContent = 'Veuillez entrer votre adresse.';
            return false;
        } else if (adress.length < 5) {
            adressError.textContent = 'L\'adresse doit contenir au moins 5 caractères.';
            return false;
        } else {
            adressError.textContent = '';
            return true;
        }
    }

    function validateCodePostal(codePostal) {
        const codePostalError = document.getElementById('codePostalError');
        if (!codePostal) {
            codePostalError.textContent = 'Veuillez entrer votre code postal.';
            return false;
        } else if (codePostal.length !== 5) {
            codePostalError.textContent = 'Le code postal doit contenir 5 caractères.';
            return false;
        } else if (isNaN(codePostal)) {
            codePostalError.textContent = 'Le code postal doit être un nombre.';
            return false;   
        } else {
            codePostalError.textContent = '';
            return true;
        }
    }    
});
