const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
let addToy = false
//////////Form and its elements//////////
const form = document.querySelector(".add-toy-form")
const nameInput = document.querySelector("input[name='name']")
const imageInput = document.querySelector("input[name='image']")




toyAdapter.getToys()
  .then(arr => arr.forEach((toy) => {
    const card = document.createElement("div")
    card.className = "card"
    
    const likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    likeButton.innerText = "Like <3"

    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar">
      <p>${toy.likes} Likes<p>
    `

    card.appendChild(likeButton)
    toyCollection.appendChild(card)

    likeButton.addEventListener("click", (e) => {
      toyAdapter.increaseLikes(toy.id, toy.likes + 1)
        .then((toy2) => {
          card.querySelector("p").innerHTML = `${toy2.likes} Likes`
          toy.likes = toy2.likes
        })
    })
  }))



////////////Event Listeners////////////////


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

///////////Make a New Toy/////////////

form.addEventListener("submit", (e) => {
  ///////Back-end//////////////
  e.preventDefault()
  toyForm.style.display = 'none'
  addToy = !addToy
  toyAdapter.createNewToy({
    name: `${nameInput.value}`,
    image: `${imageInput.value}`,
    likes: 0
  })
    /////Front-end////Only if it's successfully added to the database
    .then((toy) => {
      const card = document.createElement("div")
    card.className = "card"
    
    const likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    likeButton.innerText = "Like <3"

    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar">
      <p>${toy.likes} Likes<p>
    `

    card.appendChild(likeButton)
    toyCollection.appendChild(card)

    likeButton.addEventListener("click", (e) => {
      toyAdapter.increaseLikes(toy.id, toy.likes + 1)
        .then((toy2) => {
          card.querySelector("p").innerHTML = `${toy2.likes} Likes`
          toy.likes = toy2.likes
        })
    })
    })
})


// OR HERE!
