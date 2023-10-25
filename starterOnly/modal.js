function editNav() {
  var x = document.getElementById("myTopnav");
  var burgerIcon = document.querySelector(".fa"); // Sélectionnez l'élément du logo du menu burger
  var navbar = document.querySelector(".main-navbar");

  if (x.className === "topnav") {
    x.className += " responsive";
    burgerIcon.style.color = "white"; // Changez la couleur de fond du logo avec la classe responsive
    navbar.style.backgroundColor = "white";
  } else {
    x.className = "topnav";
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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
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

  if (formSubmitted) {
    resetForm();
    formSubmitted = false; // Remettez l'état à false pour les prochaines soumissions
  }
}

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
  const submitButton = document.querySelector(".btn-submit");

  let allValid = true;

  const firstInput = document.getElementById("first");
  const firstNameValue = firstInput.value;
  const lastInput = document.getElementById("last");
  const lastNameValue = lastInput.value;
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const quantityInput = document.getElementById("quantity")
  const quantityValue = quantityInput.value;
  const errorContainerFirst = document.getElementById("firstNameError");
  const errorContainerLast = document.getElementById("lastNameError");
  const errorContainerEmail = document.getElementById("emailError");
  const Errorquantity = document.getElementById("quantityError");
  const birthdateInput = document.getElementById("birthdate")
  const birthdateValue = birthdateInput.value;
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
  
  // Réinitialisez les valeurs et l'état du formulaire ici si nécessaire
  document.querySelector("form[name='reserve']").reset();
  console.log("Étape 2: Les valeurs du formulaire ont été réinitialisées");

  // Effacez les messages d'erreur
  
document.querySelectorAll(".error-message").forEach(errorElement => {
  errorElement.textContent = "";
  console.log("Étape 3: Les messages d'erreur ont été effacés");
});


  // Remettez les éléments formData à leur état normal
  const formElements = document.querySelectorAll(".formData");
  formElements.forEach((element) => {
    element.classList.remove("hidden");
    console.log("Étape 4: Les éléments formData ont été remis à leur état normal");
  });

  document.querySelectorAll(".formData input, .formData select, .formData textarea").forEach(inputElement => {
    inputElement.style.border = ""; 
    console.log("Étape 5: Les bordures des éléments de formulaire ont été réinitialisées");
  });

  // Remettre le message de remerciement à son état caché
  const thankYouMessage = document.getElementById("thankYouMessage");
  if (thankYouMessage) {
    thankYouMessage.style.display = "none";
  }
  console.log("Étape 6: Le message de remerciement a été caché");

  // Remettre le texte du bouton de soumission à son état initial
  const submitButton = document.querySelector(".btn-submit");
  submitButton.value = "C'est parti";
  submitButton.removeEventListener("click", closeAndReset);
  submitButton.addEventListener("click", validate);
  console.log("Étape 7: Le bouton de soumission a été réinitialisé");

  // Remettez la question à son état visible
  const hideQuestion = document.querySelector(".text-label");
  if (hideQuestion) {
    hideQuestion.style.display = "block";
  }
  console.log("Étape 8: La question a été rendue visible");

  console.log("Étape 9: Réinitialisation du formulaire terminée");
}

function closeAndReset() {
  closeModal();
  resetForm();
  const submitButton = document.querySelector(".btn-submit");
  submitButton.value = "C'est parti";
  submitButton.removeEventListener("click", closeAndReset);
  submitButton.addEventListener("click", validate);
}
