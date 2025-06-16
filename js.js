let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    if (currentScroll > lastScrollTop) {
      header.classList.add("hidden");
      header.classList.remove("scrolled-up");
    } else {
      header.classList.remove("hidden");
      header.classList.add("scrolled-up");
    }
  } else {
    header.classList.remove("hidden");
    header.classList.remove("scrolled-up");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const openMenuMobile = document.getElementById("open-menu-mobile");
const closeMenuMobile = document.getElementById("close-menu-mobile");
const navMobileMenu = document.getElementById("nav__mobile-menu");

openMenuMobile.addEventListener("click", () => {
  navMobileMenu.classList.add("active");
});

closeMenuMobile.addEventListener("click", () => {
  navMobileMenu.classList.remove("active");
});

function validateForm() {
  let isValid = true;
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    name: /^[a-zA-ZÀ-ỹ\s]{2,30}$/,
  };

  const fields = {
    email: document.getElementById("email").value.trim(),
    notes: document.getElementById("notes").value.trim(),
  };

  const errors = {
    email: document.getElementById("email-error"),
    notes: document.getElementById("notes-error"),
  };

  Object.values(errors).forEach((element) => {
    element.textContent = "";
  });

  // Validate email
  if (!fields.email) {
    errors.email.textContent = "Email is required";
    isValid = false;
  } else if (!patterns.email.test(fields.email)) {
    errors.email.textContent = "Please enter a valid email";
    isValid = false;
  }

  if (fields.notes !== "" && fields.notes.length < 5) {
    errors.notes.textContent = "Content must be at least 5 characters";
    isValid = false;
  }
  return isValid;
}

const form = document.getElementById("contact__form");

form.addEventListener("submit", (event) => {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    event.preventDefault();
    alert("Submitted successfully!!!");
  }
});
