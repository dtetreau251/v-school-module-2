document.airplaneForm.addEventListener("submit", function(e){
    e.preventDefault()
    var airplane = document.airplaneForm.diet
    var passengerDetails = []
    var firstName = document.getElementById('first-name').value
    var lastName =  document.getElementById('last-name').value
    var age = document.airplaneForm.age.value
    var gender = document.airplaneForm.gender.value
    var location = document.airplaneForm.location.value
    passengerDetails.push("First name: " + firstName + "\nLast name: " + lastName)
    passengerDetails.push("\nAge: " + age)
    passengerDetails.push("\nGender: " + gender)
    passengerDetails.push("\nLocation: " + location + "\nDietary restrictions: ")
    for (var i = 0; i < airplaneForm.diet.length; i++) {
        if(airplane[i].checked) {
        passengerDetails.push(airplane[i].value)
        }
    }
    alert(passengerDetails)
});