document.querySelector("#contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom && email && message) {
        alert("Formulaire envoy� avec succ�s !");
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});
