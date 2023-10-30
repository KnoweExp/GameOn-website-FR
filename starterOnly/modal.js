function editNav() {
  var SelectMyTopNav = document.getElementById("myTopnav");
  var burgerIcon = document.querySelector(".fa"); // Sélectionnez l'élément du logo du menu burger
  var navbar = document.querySelector(".main-navbar");

  if (SelectMyTopNav.className === "topnav") {
    SelectMyTopNav.className += " responsive";
    burgerIcon.style.color = "white"; // Changez la couleur de fond du logo avec la classe responsive
    navbar.style.backgroundColor = "white";
  } else {
    SelectMyTopNav.className = "topnav";
    burgerIcon.style.color = "#fe142f"; // Changez la couleur de fond du logo quand il n'y a pas la classe responsive
    navbar.style.backgroundColor = "";
  }
} 



// DOM Elements
const modalbg = document.querySelector(".modal-container");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitButton = document.querySelector(".btn-submit");

submitButton.addEventListener("click", validate);

let formSubmitted = false;

let firstNameValue = '';
let lastNameValue = '';
let emailValue = '';
let quantityValue = '';
let birthdateValue = '';
let selectedLocation = '';
let termsChecked = false;
let newsletterChecked = false;

// Fonction pour sauvegarder les champs du formulaire

function saveFormValues() {
  firstNameValue = document.getElementById("first").value;
  lastNameValue = document.getElementById("last").value;
  emailValue = document.getElementById("email").value;
  quantityValue = document.getElementById("quantity").value;
  birthdateValue = document.getElementById("birthdate").value;
  selectedLocation = getSelectedLocation();
  termsChecked = document.getElementById("checkbox1").checked;
  newsletterChecked = document.getElementById("checkbox2").checked;
}

// Fonction pour recharger les champs du formulaire

function retrieveFormValues() {
  document.getElementById("first").value = firstNameValue;
  document.getElementById("last").value = lastNameValue;
  document.getElementById("email").value = emailValue;
  document.getElementById("quantity").value = quantityValue;
  document.getElementById("birthdate").value = birthdateValue;
  setSelectedLocation(selectedLocation);
  document.getElementById("checkbox1").checked = termsChecked;
  document.getElementById("checkbox2").checked = newsletterChecked;
}

function getSelectedLocation() {
  const locationRadios = document.querySelectorAll("input[type='radio'][name='location']");
  for (let radio of locationRadios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
}

function setSelectedLocation(location) {
  const locationRadio = document.querySelector(`input[type='radio'][name='location'][value='${location}']`);
  if (locationRadio) {
    locationRadio.checked = true;
  }
}

// event de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancement du formulaire dans la modale
function launchModal() {
  const thankYouMessage = document.getElementById("thankYouMessage");
  if (thankYouMessage) {
    resetForm();
  }
  // si thankyoumessage resetform est appelé pour réinitialiser le formulaire

  // si la largeur de la fenetre fait moins de 768 px ca ajoute la classe no-scroll et remet le deroulement de le page vers le haut
  if (window.innerWidth <= 768) {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0,);
  }
  modalbg.style.display = "block";
  if (!formSubmitted) {
    retrieveFormValues();
  }
}

// Sélectionne l'élément avec la classe "close"
const closeBtn = document.querySelector(".close");

// Ecouteur au clic sur l'élément "close"
closeBtn.addEventListener("click", closeModal);


// Fonction pour fermer la modal
function closeModal() {
  const modalbg = document.querySelector(".modal-container");
  modalbg.style.display = "none";
// si la largeur de la fenetre fait moins de 768 px enleve la classe no-scroll
  if (window.innerWidth <= 768) {
    document.body.classList.remove('no-scroll');
  }

  if (!formSubmitted) {
    saveFormValues();
  } else {
    resetForm();
    formSubmitted = false; // Remettez l'état à false pour les prochaines soumissions
  }
}

// Fonctions de validation de chaque champs

function validateFirstName(firstName) {
  if (firstName.length < 2) {
    return false;
  }
  return true;
}

function validateLastName(lastName) {
  if (lastName.length < 2) {
    return false;
  }
  return true;
} 
  
function validateEmail(email) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$/i;
  
  if (!emailPattern.test(email)) {
    return false;
  }
  return true;
}

function validateQuantity(quantity) {
  const quantityInput = document.getElementById("quantity");
  const quantityValue = parseFloat(quantityInput.value);

  if (isNaN(quantityValue) || quantityValue < 0) {
    return false;
  }
  return true;
}

function validateBirthdate(birthdate) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(birthdate);
}

function validateLocation() {
  const locationRadios = document.querySelectorAll("input[type='radio'][name='location']");

  let isLocationSelected = false;
  for (let radio of locationRadios) {
    if (radio.checked) {
      isLocationSelected = true;
      break;
    }
  }

  if (!isLocationSelected){
    return false;
  } 
  return true;
}

function validateTerms() {
  const conditionsCheckbox = document.getElementById("checkbox1");
  
  return conditionsCheckbox.checked;
    // Si elle n'est pas cochée, affichez un message d'erreur 
  }

const form = document.querySelector("form[name='reserve']");


function validate(event) {
  event.preventDefault();  // Empêche la soumission du formulaire par défaut

  let allValid = true;

  const firstInput = document.getElementById("first");
  firstNameValue = firstInput.value;
  const errorContainerFirst = document.getElementById("firstNameError");
  const lastInput = document.getElementById("last");
  lastNameValue = lastInput.value;
  const errorContainerLast = document.getElementById("lastNameError");
  const emailInput = document.getElementById("email");
  emailValue = emailInput.value;
  const errorContainerEmail = document.getElementById("emailError");
  const quantityInput = document.getElementById("quantity")
  quantityValue = quantityInput.value;
  const Errorquantity = document.getElementById("quantityError");
  const birthdateInput = document.getElementById("birthdate")
  birthdateValue = birthdateInput.value;
  const birthdateError = document.getElementById("birthdateError");
  const locationError = document.getElementById("locationError");
  const conditionsError = document.getElementById("conditionsError");

 
  // Validation pour firstName
  if (!validateFirstName(firstNameValue)) {
    allValid = false;
    // Afficher le message d'erreur pour firstName
    errorContainerFirst.textContent = "Le prénom doit avoir au moins 2 caractères";
    firstInput.style.border = "2px solid #FF4E60"
    
  } else {
    errorContainerFirst.innerText = "";
    firstInput.style.border = "";
  }

  // Validation pour lastName
  if (!validateLastName(lastNameValue)) {
    allValid = false;
    // Afficher le message d'erreur pour lastName
    errorContainerLast.innerText = "Le Nom doit avoir au moins 2 caractères";
    lastInput.style.border = "2px solid #FF4E60"
  } else {
    errorContainerLast.innerText = "";
    lastInput.style.border = "";
  }

  // Validation pour email
  if (!validateEmail(emailValue)) {
    allValid = false;
    // Afficher le message d'erreur pour email
    errorContainerEmail.innerText = "Email invalide!";
    emailInput.style.border = "2px solid #FF4E60";
  } else {
    errorContainerEmail.innerText = "";
    emailInput.style.border =""
  }

  if (!validateQuantity(quantityValue)) {
    allValid = false;

    Errorquantity.innerText = "Quantité non valide";
    quantityInput.style.border = "2px solid #FF4E60"
  } else {
    Errorquantity.innerText = "";
    quantityInput.style.border = "";
  }

  if (!validateBirthdate(birthdateValue)) {
    allValid = false;
      birthdateError.innerText = "date non valide";
      birthdateInput.style.border = "2px solid #FF4E60";
} else {
    birthdateError.innerText = "";
    birthdateInput.style.border = "";
}

if (!validateLocation()) {
  allValid = false;
  locationError.innerText = "localisation non valide";
} else {
  locationError.innerText = "";
}

if (!validateTerms()) {
  allValid = false;
  conditionsError.textContent = "Vous devez accepter les conditions d'utilisation pour continuer.";
} else {
  conditionsError.textContent = "";
}

  if (allValid) {
    const hideQuestion = document.querySelector(".text-label")
    const thankYouMessage = document.getElementById("thankYouMessage");
    const submitButton = document.querySelector(".btn-submit");

    formSubmitted = true;
      
    if (thankYouMessage) {
      thankYouMessage.style.display = "block";

    } else {
      console.error("Élément 'thankYouMessage' non trouvé dans le DOM.");
    }

    if (hideQuestion) {
      hideQuestion.style.display = "none";
    } else {
      console.error("Élément avec la classe 'text-label' non trouvé dans le DOM.")
    }

      
    submitButton.value = "Fermer";
    submitButton.removeEventListener("click", validate);
    submitButton.addEventListener("click", closeAndReset);
    const formElements = document.querySelectorAll(".formData");
    formElements.forEach((element) => {
      element.classList.add("hidden");
    });

  }

  return allValid;  // Si false, la soumission du formulaire sera bloquée
}

function resetForm() {
  // Effacez les messages d'erreur
  document.querySelectorAll(".error-message").forEach(errorElement => {
    errorElement.textContent = "";
  });

  document.querySelectorAll(".formData input, .formData select, .formData textarea").forEach(inputElement => {
    inputElement.style.border = ""; 
  });

  // Remettre le message de remerciement à son état caché
  const thankYouMessage = document.getElementById("thankYouMessage");
  if (thankYouMessage) {
    thankYouMessage.style.display = "none";
  }
  
  // Réinitialisez les valeurs et l'état du formulaire ici si nécessaire
  document.querySelector("form[name='reserve']").reset();

  // Remettez les éléments formData à leur état normal
  const formElements = document.querySelectorAll(".formData");
  formElements.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Remettre le texte du bouton de soumission à son état initial
  const submitButton = document.querySelector(".btn-submit");
  submitButton.value = "C'est parti";
  submitButton.removeEventListener("click", closeAndReset);
  submitButton.addEventListener("click", validate);

  // Remettez la question à son état visible
  const hideQuestion = document.querySelector(".text-label");
  if (hideQuestion) {
    hideQuestion.style.display = "block";
  }
}

function closeAndReset() {
  closeModal();
  resetForm();
  const submitButton = document.querySelector(".btn-submit");
  submitButton.value = "C'est parti";
  submitButton.removeEventListener("click", closeAndReset);
  submitButton.addEventListener("click", validate);
}
