document.querySelector(".input_form").addEventListener("submit", addClicked)

function addClicked(evt) {
    evt.preventDefault();
    const inputName = evt.target.elements["name"].value
    const inputLocation = evt.target.elements["location"].value
    const inputPhoto= evt.target.elements["photo"].value
    const inputDescription = evt.target.elements["description"].value

    const createCard = newCard(inputName, inputLocation, inputPhoto, inputDescription)
  
    document.getElementById("dest_card_container").appendChild(createCard)

    const reset = evt.target
    for (let i = 0; i < reset.length; i++) {
        reset.elements[i].value = ""        
    }
}

function newCard(name, location, photo, description){
    //creating <div class="card" style="width: 18rem;">
     const card = document.createElement("div")
     card.setAttribute("class", "card")
     card.style.width = "18rem"
     // creating  <img src="..." class="card-img-top" alt="...">
     const image = document.createElement('img')
     image.setAttribute("class", "card-img-top")
     //check if url was entered and use stock img or url entered
     if (photo.length === 0) {
         image.setAttribute("src","https://assets-au-01.kc-usercontent.com/8eab38bf-c951-027f-23de-36c6b71701df/de956333-7f59-4bc5-be19-927c7c37cbcc/article-travel-destinations-world-travel.jpg")
     }else {
         image.setAttribute("src", photo)
     }
     // add stock img or input photo to div
     card.appendChild(image)
     // creating  <div class="card-body">
     const body = document.createElement("div")
     body.setAttribute("class", "card-body")
     //creating <h5 class="card-title">Card title</h5>
     const setName = document.createElement("h5")
     setName.setAttribute("class", "card-title")
     setName.innerText = name
     // add name to body div
     body.appendChild(setName)
     //creating <h5 class="card-title">Card title</h5>
     const setLocation = document.createElement("h5")
     setLocation.setAttribute("class", "card-title")
     setLocation.innerText = location
     // add location to body div
     body.appendChild(setLocation)
     // creating <p class="card-text">
     const setDescription = document.createElement("p")
     setDescription.setAttribute("class", "card-text")
     setDescription.innerText = description
       // add description to body div
     body.appendChild(setDescription)
     //buttons
     //div to contain edit and remove
     const buttons = document.createElement("div")
     //edit button <button type="button" class="btn btn-warning">Warning</button>
     const editButton = document.createElement("button")
     editButton.setAttribute("class", "btn btn-warning")
     editButton.innerText = "Edit"
     // add listener for edit form
     editButton.addEventListener("click", editForm)
     buttons.appendChild(editButton)
     //remove button <button type="button" class="btn btn-danger">Danger</button>
     const removeButton = document.createElement("button")
     removeButton.setAttribute("class", "btn btn-danger")
     removeButton.innerText = "Remove"
     //add listner for remove card
     removeButton.addEventListener("click", deleteCard)
     buttons.appendChild(removeButton)
     //add buttons to body
     body.appendChild(buttons)
     //add body to card
     card.appendChild(body)
     return card
 }
 function editForm(evt) {
    //access the form
    const body = evt.target.parentElement.parentElement
    //access each input area
    const destName = body.children[0]
    const destLocation = body.children[1]
    const destDesc = body.children[2]
    //new photo needed to access the card to edit the photo
    const editCard = body.parentElement
    const destPhoto = editCard.children[0]
    //pop-up for new input
    const newName = prompt("Change Destination Name?")
    const newLocation = prompt("Change Location?")
    const newPhoto = prompt("Change Photo?")
    const newDesc = prompt("Chang Description?")
    //if input is entered overwrite the old text
    if (newName.length > 0) {
        destName.innerText = newName
    }
    if (newLocation.length > 0) {
        destLocation.innerText = newLocation
    }
    if (newPhoto.length > 0) {
        destPhoto.setAttribute("src", newPhoto)
    }
    if (newDesc.length > 0) {
        destDesc.innerText = newDesc
      }
}

function deleteCard(evt) {
    //access the card to be deleted
    const card = evt.target.parentElement.parentElement.parentElement
    //use .remove() to delete card
    card.remove()
}
 