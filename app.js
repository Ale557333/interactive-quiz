const form = document.querySelector(".quiz-form")
const scoreParagraph = document.createElement("p")

const correctAnswers = ["B", "B", "B", "B"]

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25

      scoreParagraph.textContent = `Sua pontuação foi de ${score}%`
      form.append(scoreParagraph)
    }
  })
})
