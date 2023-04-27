// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

let elements = [
  document.getElementById('head'),
  document.getElementById('body'),
  document.getElementById('shoes')
]


document.body.onkeydown = keypress

let parts = ['head', 'body', 'shoes']

let partsIndex = [3, 4, 4]

focus = 0

elements[focus].src = `./images/${parts[focus]}${partsIndex[focus]}.png`
  elements[focus].classList.add('focussed')
  for (let index = 0; index < elements.length; index++) {
    if(index === focus) {
      continue
    }
    elements[index].classList.remove('focussed')
  }


function keypress(event) {
  event.preventDefault()
  switch (event.key) {
    case 'ArrowRight':
      partsIndex[focus]++
      if (partsIndex[focus] > 5) {
        partsIndex[focus] = 0
      }
      break
    case 'ArrowLeft':
      partsIndex[focus]--
      if (partsIndex[focus] < 0) {
        partsIndex[focus] = 5
      }
      break;
    case 'ArrowUp':
      focus--
      if (focus < 0) {
        focus = 2
      }
      break;
    case 'ArrowDown':
      focus++
      if (focus > 2) {
        focus = 0
      }
      break;
  }

  elements[focus].src = `./images/${parts[focus]}${partsIndex[focus]}.png`
  elements[focus].classList.add('focussed')
  for (let index = 0; index < elements.length; index++) {
    if(index === focus) {
      continue
    }
    elements[index].classList.remove('focussed')
  }
}