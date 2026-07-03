document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".persona-card");

  let activeCard = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      setActiveCard(card);
    });
  });

  function setActiveCard(card) {
    // If clicking the same card → toggle off
    if (activeCard === card) {
      card.classList.remove("active");
      activeCard = null;
      return;
    }

    // Remove previous active
    if (activeCard) {
      activeCard.classList.remove("active");
    }

    // Set new active
    card.classList.add("active");
    activeCard = card;

    // Optional: log system state (useful for debugging / future AI layer)
    console.log("Active Resident:", card.querySelector("h3")?.innerText);
  }
});
