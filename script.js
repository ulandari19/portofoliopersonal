/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


/* =========================
   CLOSE NAVBAR AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   SCROLL TOP BUTTON
========================= */

const scrollTop =
    document.getElementById("scroll-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   IMAGE MODAL
========================= */

const modal =
    document.getElementById("image-modal");

const modalImage =
    document.getElementById("modal-image");

const closeModal =
    document.getElementById("close-modal");

const clickableImages =
    document.querySelectorAll(".clickable-image");


clickableImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeImageModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}


closeModal.addEventListener(
    "click",
    closeImageModal
);


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeImageModal();

    }

});


/* =========================
   ESC TO CLOSE IMAGE
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeImageModal();

    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        alert(
            "Silakan lengkapi semua data terlebih dahulu."
        );

        return;

    }


    alert(
        `Terima kasih ${name}! 💌\n\nPesan kamu sudah berhasil dikirim.\n\nUntuk saat ini form masih berupa demo.`
    );


    contactForm.reset();

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});