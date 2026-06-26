/* ===========================
   Contact Form
=========================== */

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! We'll contact you shortly.");

        form.reset();
    });
}


/* ===========================
   Mobile Navigation
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✖";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}


/* ===========================
   Gallery Lightbox
=========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}


/* ===========================
   WhatsApp Booking Modal
=========================== */

const bookingModal = document.getElementById("bookingModal");
const bookNow = document.getElementById("bookNow");
const closeModal = document.querySelector(".close-modal");
const sendWhatsapp = document.getElementById("sendWhatsapp");

if (bookingModal && bookNow && closeModal && sendWhatsapp) {

    // Open Popup
    bookNow.addEventListener("click", () => {

        bookingModal.style.display = "flex";

    });

    // Close Popup
    closeModal.addEventListener("click", () => {

        bookingModal.style.display = "none";

    });

    // Close when clicking outside the popup
    bookingModal.addEventListener("click", (e) => {

        if (e.target === bookingModal) {
            bookingModal.style.display = "none";
        }

    });

    // Send WhatsApp Message
    sendWhatsapp.addEventListener("click", () => {

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const date = document.getElementById("eventDate").value;
        const service = document.getElementById("service").value;

        // Validation
        if (!name || !phone || !date || !service) {
            alert("Please fill all the fields.");
            return;
        }

        const message = `Hello Samiksha,

I would like to book a Mehendi appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Event Date: ${date}`;

        const url = `https://wa.me/917709040233?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        // Close popup and clear fields
        bookingModal.style.display = "none";

        document.getElementById("customerName").value = "";
        document.getElementById("customerPhone").value = "";
        document.getElementById("eventDate").value = "";
        document.getElementById("service").selectedIndex = 0;

    });

}