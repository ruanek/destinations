const addCard = document.getElementById("dest_card_container")
document.getElementById("submitted").addEventListener("click", addfunchere)

function submitClicked(evt) {
    evt.preventDefault();

    const inputName = evt.target.elements["name"]
    const inputLocation = evt.target.elements["location"]
    const inputPhoto= evt.target.elements["photo"]
    const inputDescription = evt.target.elements["description"]

    // create card

    addCard.appendChild(newCard)
}






<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>