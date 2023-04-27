  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let images = document.getElementsByClassName("inflate-an-image")
let unicorns = []

for (let i = 0; i < images.length; i++) {
  images[i].onclick = clickEvent
  unicorns.push({
    image: images[i],
    level: 0
  })
}


//when clicked:
function clickEvent(e) {
  let unicorn = unicorns.find(unicorn => unicorn.image === e.target)
  let unicornNumber = unicorns.indexOf(unicorn)
  if (unicorn.level < 3) {
    unicorn.level++
  }
  else {
    alert('Unicorn number ' + unicornNumber + ' has been fully inflated')
  } 
  unicorn.image.src = './images/unicorn-' + unicorn.level + '.png'
}


