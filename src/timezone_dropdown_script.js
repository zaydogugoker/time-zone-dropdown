let parisZone = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");

function displayDate(event) {
  if (event.target.value.length > 0) {
    if (event.target.value == "paris")
      alert(`It is ${parisZone} in Europe/Paris`);
  }
}

let selectCountries = document.querySelector("#countries");
selectCountries.addEventListener("change", displayDate);
