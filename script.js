import {handleFormSubmit} from "./helpers.js"

// Listener for submit of form
document.querySelector(".input_form").addEventListener("submit", handleFormSubmit)

navigator.geolocation.getCurrentPosition(handlePositionSuccess, handlePositionError)


 function handlePositionSuccess(loc) {
    console.log(loc.coords.latitude, loc.coords.longitude);
 }

 function handlePositionError() {
    alert("WOW")
 }