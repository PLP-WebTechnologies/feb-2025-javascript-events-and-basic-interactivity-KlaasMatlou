// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });

  document.getElementById("hoverBox").addEventListener("mouseover", () => {
  alert("See me Now");
  })
  document.getElementById("keypressInput").addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById("clickBtn").addEventListener("dblclick", () => {
    alert("Double-click secret action!");
  });
  
  // 2. Interactive Elements
  const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", () => {
  changeTextBtn.textContent = "Text Changed!";
  changeTextBtn.style.backgroundColor = "#4CAF50";
});

changeTextBtn.addEventListener("dblclick", () => {
  // Add "magic" class for animation
  changeTextBtn.classList.add("magic-effect");

  changeTextBtn.textContent = "✨ Magic in Progress...";

  // Remove class after animation ends (optional cleanup)
  setTimeout(() => {
    changeTextBtn.classList.remove("magic-effect");
    changeTextBtn.textContent = "✨ Magic Done!"; // Change text again
  }, 600);
});
  

  // Background Slideshow
const bgImages = [
  "wp11134600-anime-ps4-attack-on-titan-wallpapers.png",
  "wp14034855-captain-levi-phone-wallpapers.jpg",
  "wp14240239-levi-dark-wallpapers.jpg"
];

let currentBgIndex = 0;

// Create background element dynamically if not in HTML
const backgroundOverlay = document.createElement("div");
backgroundOverlay.classList.add("background-overlay");
document.body.appendChild(backgroundOverlay);

// Set the first background image
backgroundOverlay.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;

document.getElementById("nextSlide").addEventListener("click", () => {
  // Increment index and loop back if at the end
  currentBgIndex = (currentBgIndex + 1) % bgImages.length;

  // Remove fade class to restart animation
  backgroundOverlay.classList.remove("fade-effect");
  void backgroundOverlay.offsetWidth; // Force reflow
  backgroundOverlay.classList.add("fade-effect");

  // Change background image
  backgroundOverlay.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
});
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tabBtn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      document.getElementById("tabContent").textContent = `Content for Tab ${tab}`;
    });
  });
  
  // 3. Form Validation
  const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameFeedback = document.getElementById("nameFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");
const formFeedback = document.getElementById("formFeedback");

// Real-time validation functions
function validateName() {
  const value = nameInput.value.trim();
  if (!value) {
    nameFeedback.textContent = "Name is required.";
    nameFeedback.classList.remove("success");
    return false;
  } else {
    nameFeedback.textContent = "Looks good!";
    nameFeedback.classList.add("success");
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /\S+@\S+\.\S+/;
  if (!value) {
    emailFeedback.textContent = "Email is required.";
    emailFeedback.classList.remove("success");
    return false;
  } else if (!emailRegex.test(value)) {
    emailFeedback.textContent = "Please enter a valid email.";
    emailFeedback.classList.remove("success");
    return false;
  } else {
    emailFeedback.textContent = "Valid email.";
    emailFeedback.classList.add("success");
    return true;
  }
}

function validatePassword() {
  const value = passwordInput.value.trim();
  if (!value) {
    passwordFeedback.textContent = "Password is required.";
    passwordFeedback.classList.remove("success");
    return false;
  } else if (value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    passwordFeedback.classList.remove("success");
    return false;
  } else {
    passwordFeedback.textContent = "Strong password!";
    passwordFeedback.classList.add("success");
    return true;
  }
}

// Attach real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Final form submission check
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    formFeedback.style.color = "limegreen";
    formFeedback.textContent = "FORM SUBMITTED SUCCESSFULLY!";

    // Auto-reset the form after 2 seconds
    setTimeout(() => {
      this.reset(); // Clears all input fields

      // Reset feedback messages
      nameFeedback.textContent = "";
      emailFeedback.textContent = "";
      passwordFeedback.textContent = "";
      formFeedback.textContent = "";

    }, 2000);
  } else {
    formFeedback.style.color = "red";
    formFeedback.textContent = "Please fix the errors above.";
  }
});