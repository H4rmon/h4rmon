// script.js

// Récupérer l'élément audio avec l'id "audio1"
const audio = document.getElementById("audio1");
const body = document.body;

// Fonction pour ajuster la couleur du fond
function changeBackgroundColor() {
    const currentTime = audio.currentTime; // Temps écoulé de l'audio

    // De 19s à 44s, assombrir progressivement
    if (currentTime >= 19 && currentTime <= 44) {
        // Calculer l'assombrissement progressif entre 19 et 44 secondes
        const blackAmount = ((currentTime - 19) / (44 - 19)) * 255; // Calcul progressif

        // Appliquer l'assombrissement (passage du blanc au noir)
        body.style.backgroundColor = `rgb(${255 - blackAmount}, ${255 - blackAmount}, ${255 - blackAmount})`;
    }
    // Après 44s, rester noir jusqu'à 1min28 (88s)
    else if (currentTime > 44 && currentTime <= 89) {
        body.style.backgroundColor = "rgb(0, 0, 0)"; // Fond complètement noir
    }
    // Après 1min28, revenir instantanément au fond blanc
    else if (currentTime > 89) {
        body.style.backgroundColor = "white"; // Fond blanc
    }
}

// Ajouter un événement pour déclencher la fonction à chaque mise à jour de la lecture
audio.addEventListener('play', function() {
    setInterval(changeBackgroundColor, 5); // Vérifie toutes les 100ms
});







