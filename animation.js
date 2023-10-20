// Redirection vers la page de contact lors du clic sur le bouton "Contacter"
document.getElementById("contact-button").addEventListener("click", function () {
    window.location.href = "contact/contact.html"; // Modifiez le chemin d'accès relatif ici
});



// Ajout d'interactivité aux sections
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.addEventListener("click", function () {
        section.classList.toggle("active");
    });
});
// JavaScript pour afficher la section "Contact" avec un fondu
document.getElementById("contact-button").addEventListener("click", function () {
    const contactSection = document.querySelector(".contact");
    contactSection.style.opacity = "0";
    contactSection.style.display = "block";
    // Utilisez une transition CSS pour un fondu en douceur
    contactSection.style.transition = "opacity 0.5s";
    setTimeout(() => {
        contactSection.style.opacity = "1";
    }, 10); // Laissez un petit délai pour que la transition fonctionne correctement
});
