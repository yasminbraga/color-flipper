const clickButton = document.getElementById('click-button')

function generateColor() {
  const color = '#' + Math.floor(Math.random()*16777215).toString(16)
  return color
}

clickButton.addEventListener('click', function() {
  const color = generateColor()
  document.getElementById('color-field').innerHTML = color
  document.body.style.backgroundColor = color
  this.style.backgroundColor = color
})

