let parisZone = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");
let tokyoZone = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
let sydneyZone = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:mm A");
let selectCountries = document.querySelector("#countries");

function displayDate(event) {
  if (event.target.value.length > 0) {
    if (event.target.value == "paris")
      alert(`It is ${parisZone} in Europe/Paris`);
  }
  if (event.target.value == "tokyo") {
    alert(`It is ${tokyoZone} in Asia/Tokyo`);
  }

  if (event.target.value == "sydney") {
    alert(`It is ${sydneyZone} in Australia/Sydney`);
  }
}
selectCountries.addEventListener("change", displayDate);
