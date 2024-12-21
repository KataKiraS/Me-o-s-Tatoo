document.addEventListener("mousemove", function(e) {
    let cards = document.querySelectorAll('.card, .pricing-card'); // Selecciona ambos tipos de tarjetas
    
    cards.forEach(function(card) {
        let x = (e.clientX / window.innerWidth) * 100; // Posición horizontal del ratón
        let y = (e.clientY / window.innerHeight) * 100; // Posición vertical del ratón
        card.style.backgroundPosition = `${x}% ${y}%`; // Mueve el fondo de la tarjeta
    });
});
