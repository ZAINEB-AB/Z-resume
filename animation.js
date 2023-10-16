// Redirection vers la page de contact lors du clic sur le bouton "Contacter"
document.getElementById("contact-button").addEventListener("click", function () {
    window.location.href = "contact.html";
});

// Ajout d'interactivité aux sections
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.addEventListener("click", function () {
        section.classList.toggle("active");
    });
});

