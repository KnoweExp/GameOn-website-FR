function editNav() {
  var x = document.getElementById("myTopnav");
  var burgerIcon = document.querySelector(".fa"); // Sélectionnez l'élément du logo du menu burger

  if (x.className === "topnav") {
    x.className += " responsive";
    burgerIcon.style.color = "white"; // Changez la couleur de fond du logo du menu burger en noir
  } else {
    x.className = "topnav";
    burgerIcon.style.color = "red"; // Changez la couleur de fond du logo du menu burger en noir
  }
}

// DOM Elements
const modalbg = document.querySelector(".modal-container");
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
  const modalbg = document.querySelector(".modal-container");
  modalbg.style.display = "none";
}


function validate(event) {
  let isValid = true;

  // Récupération des valeurs
  firstNameValue = document.getElementById("first").value;
  lastNameValue = document.getElementById("last").value;
  emailValue = document.getElementById("email").value;

  // Vérification de chaque champ
  if (!validateFirstName(firstNameValue)) isValid = false;
  if (!validateLastName(lastNameValue)) isValid = false;
  if (!validateEmail(emailValue)) isValid = false;

  if (isValid) {
      // Masquez le formulaire
      formData.forEach(element => {
        element.style.display = "none";
      });

      // Affichez le message de remerciement
      const thankYouMessage = document.getElementById("thankYouMessage");
      thankYouMessage.classList.remove("hidden");
      const textLabelElement = document.querySelector(".text-label");
      textLabelElement.textContent = "";
      const submitBtn = document.querySelector(".btn-submit");
      submitBtn.value = "Fermer";
      submitBtn.addEventListener("click", closeModal);

      
      event.preventDefault();
  } else {
      // Empêchez la soumission si une validation échoue
      event.preventDefault();
  }

  return isValid;
}

function validateFirstName(firstName) {
  const errorContainer = document.getElementById("firstNameError");
  const firstInput = document.getElementById("first")
  
  
  
  if (firstName.length < 2) {
    errorContainer.textContent = "Le prénom doit avoir au moins 2 caractères";
    firstInput.style.border = "2px solid #FF4E60"
    return false;
  }
  return true;
}

function validateLastName(lastName) {
  const errorContainer = document.getElementById("lastNameError");
  const lastInput = document.getElementById("last")
  
  if (lastName.length < 2) {
    errorContainer.textContent = "Le nom doit avoir au moins 2 caractères";
    lastInput.style.border = "2px solid #FF4E60"
    return false;
  }
  return true;
} 
  
function validateEmail(email) {
  const errorContainer = document.getElementById("emailError");
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$/i;
  const emailInput = document.getElementById("email")

  if (!emailPattern.test(email)) {
    errorContainer.textContent = "Veuillez entrer une adresse email valide";
    emailInput.style.border = "2px solid #FF4E60"
    return false;
  }
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
form.addEventListener("submit", function(event) {
  // Récupérez les valeurs des champs
  const firstNameValue = document.getElementById("first").value;  
  const lastNameValue = document.getElementById("last").value;    
  const emailValue = document.getElementById("email").value;      
  const quantityValue = document.getElementById("quantity").value; 
  const locationValue = document.querySelector("input[name='location']:checked");


  function validateForm() {
    let isValid = true;

    // Vérification de chaque champ
    if (!validateFirstName(firstNameValue)) isValid = false;
    if (!validateLastName(lastNameValue)) isValid = false;
    if (!validateEmail(emailValue)) isValid = false;
    
    // Ici, vous pouvez ajouter d'autres validations si nécessaire, comme pour quantityValue et locationValue

    // Si validations réussies, effectuez actions.
    
    if (isValid) {
      const thankYouMessage = document.getElementById("thankYouMessage");
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      } else {
        console.error("Élément 'thankYouMessage' non trouvé dans le DOM.");
      }

      const formElements = document.querySelectorAll(".formData");
      formElements.forEach((element) => {
        element.classList.add("hidden");
      });
    }

    return isValid;
  }

  if (!validateForm()) {
    event.preventDefault();
  }
});


// Fonction de validation du formulaire
/* function validateForm2() {
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
  } 

  // Si toutes les validations réussissent, vous pouvez fermer la modal ici
  const modalbg = document.querySelector(".modal-container");
  modalbg.style.display = "none";



  return true;
} */
