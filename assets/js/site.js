document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".persona-card");

  let activeCard = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {

      const name = card.querySelector("h3")?.innerText;

      // toggle behavior
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

});
