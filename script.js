const canvas = document.getElementById("matrix")
const context = canvas.getContext("2d")
const fontSize = 14
const noLatinLetters =
  "01010101010101010101010101010101010101010101010101010101010101010101"

const latin = ""
const nums = "0123456789"

const allLetters = noLatinLetters + latin + nums

let rainDrops = []
const start = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const columns = canvas.width / fontSize
  rainDrops = []
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1
  }
}
const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)"
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = "#0F0"
  context.font = fontSize + "px monospace"

  for (let i = 0; i < rainDrops.length; i++) {
    const text = allLetters.charAt(
      Math.floor(Math.random() * allLetters.length)
    )
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.98) {
      rainDrops[i] = 0
    }
    rainDrops[i]++
  }
}
start()
window.onresize = function () {
  start()
}

setInterval(draw, 30)
