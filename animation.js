// Fonction pour masquer/afficher les sections du CV
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const header = section.querySelector("h2");

        header.addEventListener("click", function () {
            section.classList.toggle("active");
        });
    });
});
