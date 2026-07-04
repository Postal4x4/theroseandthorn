document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".persona-card");

  let activeCard = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {

      const name = card.querySelector("h3")?.innerText;

      if (activeCard === card) {
        card.classList.remove("active");
        activeCard = null;
        Estate.setResident(null);
        return;
      }

      if (activeCard) activeCard.classList.remove("active");

      card.classList.add("active");
      activeCard = card;

      Estate.setResident(name);
    });
  });

  // SAFE RESPONSE SYSTEM (NO CSS SIDE EFFECTS)
  Estate.onChange((resident) => {
    if (!resident) return;

    const responses = {
      "Reginald": "The estate remains under structured oversight.",
      "Winston": "Evening service protocols are available.",
      "Chef Julia": "Kitchen readiness has been initiated.",
      "Hank": "Fermentation cycles are stable.",
      "Aria": "Atmospheric calibration is steady.",
      "Rex": "Games and Mysteries ready",
      "Coach": "Warmups completed ready for workouts."
      "Strings": "All tuned up and staged."
      "Sofia": "LISTO!"
      "Blitz": "Huge Fan!!!"
      "Isabelle": "Closets organized and ready for the season."
      "Colonel": "All monitors and security are a Go."
    
    };

    console.log("Estate Voice:", responses[resident] || "No response defined.");
  });

});
