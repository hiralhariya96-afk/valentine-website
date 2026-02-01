const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const result = document.getElementById("result");

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button action */
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  result.classList.remove("hidden");
});
