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
  console.log("retrieveFormValues is called");
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

  // si la largeur de la fenetre fait moins de 768 px ca ajoute la classe no-scroll et remet le deroulement de le page vers le haut
  if (window.innerWidth <= 768) {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0,);
  }
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
// si la largeur de la fenetre fait moins de 768 px enleve la classe no-scroll
  if (window.innerWidth <= 768) {
    document.body.classList.remove('no-scroll');
  }

  if (!formSubmitted) {
  } else {
    resetForm();
    formSubmitted = false; // Remettre l'état à false pour les prochaines soumissions
  }
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
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$/i;
  const quantityInput = document.getElementById("quantity")
  quantityValue = parseFloat(quantityInput.value);
  const Errorquantity = document.getElementById("quantityError");
  const birthdateInput = document.getElementById("birthdate")
  birthdateValue = birthdateInput.value;
  const birthdateError = document.getElementById("birthdateError");
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  const locationRadios = document.querySelectorAll("input[type='radio'][name='location']");
  const isLocationSelected = Array.from(locationRadios).some(radio => radio.checked);
  const locationError = document.getElementById("locationError");
  const conditionsCheckbox = document.getElementById("checkbox1");
  const conditionsError = document.getElementById("conditionsError");

 
  // Validation pour firstName
  if (firstNameValue.trim().length < 2) {
    allValid = false;
    // Afficher le message d'erreur pour firstName
    errorContainerFirst.textContent = "Le prénom doit avoir au moins 2 caractères";
    firstInput.style.border = "2px solid #FF4E60"

    
  } else {
    errorContainerFirst.innerText = "";
    firstInput.style.border = "";
    
  }

  // Validation pour lastName
  if (lastNameValue.trim().length < 2) {
    allValid = false;
    // Afficher le message d'erreur pour lastName
    errorContainerLast.innerText = "Le Nom doit avoir au moins 2 caractères";
    lastInput.style.border = "2px solid #FF4E60"
  } else {
    errorContainerLast.innerText = "";
    lastInput.style.border = "";
  }

  // Validation pour email
  if (!emailPattern.test(emailValue)) {
    allValid = false;
    // Afficher le message d'erreur pour email
    errorContainerEmail.innerText = "Email invalide!";
    emailInput.style.border = "2px solid #FF4E60";
  } else {
    errorContainerEmail.innerText = "";
    emailInput.style.border =""
  }
  
  if (isNaN(quantityValue) || quantityValue < 0) {
    allValid = false;

    Errorquantity.innerText = "Quantité non valide";
    quantityInput.style.border = "2px solid #FF4E60"
  } else {
    Errorquantity.innerText = "";
    quantityInput.style.border = "";
  }

  if (!regex.test(birthdateValue)) {
    allValid = false;
      birthdateError.innerText = "date non valide";
      birthdateInput.style.border = "2px solid #FF4E60";
  } else {
      birthdateError.innerText = "";
      birthdateInput.style.border = "";
  }

  if (!isLocationSelected) {
    allValid = false;
    locationError.innerText = "Vous devez choisir une localisation";
  } else {
    locationError.innerText = "";
  }

  if (!conditionsCheckbox.checked) {
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
      thankYouMessage.classList.remove("hidden");

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
  
  if (formSubmitted) {
    setTimeout(() => {
      
  
      const errorMessageDivs = document.querySelectorAll('.error-message');
      errorMessageDivs.forEach(div => {
        div.textContent = "";
      });
  
      const inputFields = document.querySelectorAll('input, textarea');
      inputFields.forEach(field => {
        field.style.border = "";
      });
    }, 0);
    // Réinitialise l'état du formulaire 
    document.querySelector("form[name='reserve']").reset();
    
  
    // Remettre le message de remerciement à son état caché
    const thankYouMessage = document.getElementById("thankYouMessage");
    if (thankYouMessage) {
      thankYouMessage.classList.add("hidden");
    }
    
    // Remettre les éléments formData à leur état normal
    const formElements = document.querySelectorAll(".formData");
    formElements.forEach((element) => {
      element.classList.remove("hidden");
    });
  
    // Remettre le texte du bouton de soumission à son état initial
    const submitButton = document.querySelector(".btn-submit");
    submitButton.value = "C'est parti";
    submitButton.removeEventListener("click", closeAndReset);
    submitButton.addEventListener("click", validate);
  
    // Remettre la question à son état visible
    const hideQuestion = document.querySelector(".text-label");
    if (hideQuestion) {
      hideQuestion.style.display = "block";
    }
    
    // Remettre le formulaire à son état non soumis
    formSubmitted = false;
  }
  // Remettre les éléments formData à leur état normal
  const formElements = document.querySelectorAll(".formData");
  formElements.forEach((element) => {
    element.classList.remove("hidden");
  });
  // Remettre le texte du bouton de soumission à son état initial
  const submitButton = document.querySelector(".btn-submit");
  submitButton.value = "C'est parti";
  submitButton.removeEventListener("click", closeAndReset);
  submitButton.addEventListener("click", validate);

  // Remettre la question à son état visible
  const hideQuestion = document.querySelector(".text-label");
  if (hideQuestion) {
    hideQuestion.style.display = "block";
  }
  

}

function closeAndReset() {
  closeModal();
  if (!formSubmitted) {
    resetForm();
    formSubmitted = false;
  }
}
