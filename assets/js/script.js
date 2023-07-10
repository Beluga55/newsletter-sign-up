// Validate Email Function And Show Error Message

// Card Elements
const cardContainer = document.querySelector(".card__container");
const cardSuccess = document.querySelector(".card__success");

// Button
const validateBtn = document.getElementById("validateBtn");
const dismissBtn = document.getElementById("dismissBtn");

// Hidden and Show Elements
const hiddenElements = document.querySelectorAll(
  ".card__images, #title, #subtitle, .card__info, .card__email"
);
const showElements = document.querySelector(".card__success");

// Email Elements
const errorText = document.querySelector(".card__email-title p");
const trackEmail = document.querySelector(".card__success-content p span");
const emailForm = document.getElementById("emailForm");
const emailBox = document.getElementById("email");

// Colors
const rootStyles = getComputedStyle(document.documentElement);
const tomatoColor = rootStyles.getPropertyValue("--Tomato");
const tomatoAlpha = rootStyles.getPropertyValue("--TomatoAlpha");
const grayColor = rootStyles.getPropertyValue("--Grey");
const whiteColor = rootStyles.getPropertyValue("--White");
const darkGrayColor = rootStyles.getPropertyValue("--DarkSlateGrey");

// Make Certain Elements Hidden
function validateEmail() {
  var emailInput = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    for (var i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].classList.add("hidden");
    }
    errorText.classList.remove("show");
    showElements.classList.remove("hidden");
    trackEmail.textContent = emailInput;
    cardContainer.style.gridTemplateColumns = "none";
    cardContainer.style.backgroundColor = "initial";
  } else {
    errorText.classList.add("show");
    emailBox.style.border = `1px solid ${tomatoColor}`;
    emailBox.style.backgroundColor = `${tomatoAlpha}`;
    emailBox.style.color = `${tomatoColor}`;
  }
}

validateBtn.addEventListener("click", validateEmail);

// Dismiss Message Button
function dismissMessage() {
  for (var i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.remove("hidden");
  }
  showElements.classList.add("hidden");
  emailBox.style.border = `1px solid ${grayColor}`;
  emailBox.style.backgroundColor = `${whiteColor}`;
  emailBox.style.color = `${darkGrayColor}`;
  emailForm.reset();
  cardContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
  cardContainer.style.backgroundColor = `${whiteColor}`;
}

dismissBtn.addEventListener("click", dismissMessage);

// Change Images When Desktop View
const imageElement = document.getElementById("imageElement");

function updateImageSource() {
  if (window.innerWidth < 576) {
    // Mobile Image
    imageElement.src = "assets/images/illustration-sign-up-mobile.svg";
  } else {
    // Desktop Image
    imageElement.src = "assets/images/illustration-sign-up-desktop.svg";
  }
}

updateImageSource();

window.addEventListener("resize", updateImageSource);
