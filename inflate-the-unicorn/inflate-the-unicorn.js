  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let images = document.getElementsByClassName("inflate-an-image")
let unicorns = []

function clickEvent(e) {
  let unicorn = unicorns.find(unicorn => unicorn.image == e.target)
  if (unicorn.level < 3) unicorn.level++
  unicorn.image.src = './images/unicorn-' + unicorn.level + '.png'
}

for (let i = 0; i < images.length; i++) {
  images[i].onclick = clickEvent
  unicorns.push({
    image: images[i],
    level: 0
  })
}

console.log("Inflate The Unicorn!")
