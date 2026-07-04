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

  // GLOBAL RESPONSE SYSTEM
  window.addEventListener("estate:update", (e) => {
    const state = e.detail;

    handleResidentResponse(state.activeResident);
  });

});

function handleResidentResponse(resident) {
  if (!resident) return;

  const responses = {
    "Reginald": "The estate is under structured supervision.",
    "Winston": "Evening protocols are now available.",
    "Julia": "Kitchen systems are on standby for preparation.",
    "Hank": "Fermentation cycles are within optimal range.",
    "Aria": "Atmospheric layers adjusted subtly.",
    "Rex": "Interactive systems are ready for engagement.",
    "Orion": "Security layer is stable and monitoring.",
    "Atlas": "Inventory systems are balanced.",
    "Selene": "Environmental controls are steady.",
    "Mercer": "Memory logs are being maintained.",
    "Nova": "Guest protocols are active.",
    "Sol": "Scheduling systems are synchronized.",
    "Barley": "Brewing analytics are processing live data.",
    "Echo": "Entertainment systems are available.",
    "Cedar": "Household metrics are being analyzed.",
    "Vanta": "System integrity is confirmed."
  };

  console.log(`🜁 ${resident}:`, responses[resident] || "No response defined.");
}
