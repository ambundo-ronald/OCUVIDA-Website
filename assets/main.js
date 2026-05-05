const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const leadForm = document.querySelector("[data-lead-form]");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const message = [
      "Hello OCUVIDA, I would like to make an enquiry.",
      `Name: ${data.get("name") || ""}`,
      `Organization: ${data.get("organization") || ""}`,
      `County: ${data.get("county") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Type: ${data.get("type") || ""}`,
      `Preferred contact: ${data.get("contact") || ""}`,
      `Message: ${data.get("message") || ""}`
    ].join("\n");

    const note = leadForm.querySelector("[data-form-note]");
    const preferred = data.get("contact");
    if (note) {
      note.textContent = preferred === "Email" ? "Opening email with your enquiry." : "Opening WhatsApp with your enquiry.";
    }

    if (preferred === "Email") {
      window.location.href = `mailto:sales@ocuvida.co.ke?subject=${encodeURIComponent("OCUVIDA collection enquiry")}&body=${encodeURIComponent(message)}`;
      return;
    }

    window.location.href = `https://wa.me/254721265700?text=${encodeURIComponent(message)}`;
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });

    galleryItems.forEach((item) => {
      const categories = item.dataset.category || "";
      item.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

const lightbox = document.querySelector("[data-lightbox]");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("p");
  const closeButton = lightbox.querySelector(".lightbox-close");
  let lastTrigger = null;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lastTrigger = item;
      lightboxImage.src = item.dataset.full;
      lightboxImage.alt = item.querySelector("img")?.alt || "";
      lightboxCaption.textContent = item.dataset.caption || "";
      lightbox.hidden = false;
      closeButton.focus();
    });
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = "";
    if (lastTrigger) {
      lastTrigger.focus();
    }
  };

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
