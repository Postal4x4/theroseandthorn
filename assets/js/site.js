function togglePersona(el) {
  el.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".persona-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});
