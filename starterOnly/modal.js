function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Sélectionne l'élément avec la classe "close"
const closeBtn = document.querySelector(".close");

// Ecouteur au clic sur l'élément "close"
closeBtn.addEventListener("click", closeModal);

// Fonction pour fermer la modal
function closeModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
}

function validate(event) {
  
 
  
  // Si validation réussit, vous pouvez fermer la modal ici
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
  
  
  event.preventDefault();
  
  
  return true;
}

// Définissez la fonction de validation en dehors du gestionnaire d'événements
function validate() {
  // ... (votre code de validation)

  // Si validation réussit, vous pouvez fermer la modal ici
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";

  

  return true;
}

const form = document.querySelector("form[name='reserve']");

// Créez des variables pour stocker les valeurs des champs
let firstNameValue = "";
let lastNameValue = "";
let emailValue = "";
let quantityValue = "";
let locationValue = "";

// Ajoutez un gestionnaire d'événements pour la soumission du formulaire
form.addEventListener("submit", function (event) {
  // Récupérez les valeurs des champs
  firstNameValue = document.getElementById("first").value;
  lastNameValue = document.getElementById("last").value;
  emailValue = document.getElementById("email").value;
  quantityValue = document.getElementById("quantity").value;
  locationValue = document.querySelector("input[name='location']:checked");
  
  function validateFirstName(firstName) {
      const errorContainer = document.getElementById("firstNameError");
    
      if (firstName.length < 2) {
        errorContainer.textContent = "Le prénom doit avoir au moins 2 caractères";
        console.log("erreur : Le prénom doit avoir au moins 2 caractères");
        return false;
      }
    }
    function validateLastName(lastName) {
      const errorContainer = document.getElementById("lastNameError");
    
      if (lastName.length < 2) {
        errorContainer.textContent = "Le nom doit avoir au moins 2 caractères";
        console.log("erreur : Le nom doit avoir au moins 2 caractères");
        return false;
      }
    } 
    
    function validateEmail(email) {
      const errorContainer = document.getElementById("emailError");
      const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/i; 
      if (!emailPattern.test(email)) {
          errorContainer.textContent = "Veuillez entrer une adresse email valide";
          return false;
      }
  }

    function validateForm() {
      let isValid = true;

      // Vérification de chaque champ
      if (!validateFirstName(firstNameValue)) isValid = false;
      if (!validateLastName(lastNameValue)) isValid = false;
      if (!validateEmail(emailValue)) isValid = false;
      

      // Si validations réussies, effectuez actions.
      if (isValid) {
          const modalbg = document.querySelector(".bground");
          modalbg.style.display = "none";
          const body = document.querySelector("body");
      }

      return isValid;
  }


  if (!validateForm()) {
      event.preventDefault();
  }
});

// Fonction de validation du formulaire
function validateForm() {
  // Récupérez les valeurs des champs
  const firstName = firstNameValue;
  const lastName = lastNameValue;
  const email = emailValue;
  const quantity = parseInt(quantityValue, 10);
  const location = locationValue;
  const terms = document.getElementById("checkbox1").checked;


/*   // Validation de la quantité
  if (isNaN(quantity) || quantity < 0) {
    alert("Veuillez entrer une valeur numérique valide pour la quantité.");
    return false;
  }

  // Validation de la sélection d'une localisation
  if (!location) {
    alert("Veuillez sélectionner une localisation.");
    return false;
  }

  // Validation de l'acceptation des conditions générales
  if (!terms) {
    alert("Vous devez accepter les conditions générales.");
    return false;
  } */

  // Si toutes les validations réussissent, vous pouvez fermer la modal ici
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";

  // Réinitialisez la classe "no-scroll" du corps du document
  const body = document.querySelector("body");
  body.classList.remove("no-scroll");

  return true;
}
