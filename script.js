document.querySelector(".input_form").addEventListener("submit", addClicked)

function addClicked(evt) {
    evt.preventDefault();
    const inputName = evt.target.elements["name"].value
    const inputLocation = evt.target.elements["location"].value
    const inputPhoto= evt.target.elements["photo"].value
    const inputDescription = evt.target.elements["description"].value

    const createCard = newCard(inputName, inputLocation, inputPhoto, inputDescription)
  
    document.getElementById("dest_card_container").appendChild(createCard)
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
     
     card.appendChild(body)
     return card
 }