const letter = document.querySelectorAll(".letters .letter")

letter.forEach((letter) => {
  letter.addEventListener("click", () => {
    letter.classList.toggle("active")
  })
})