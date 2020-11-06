let form = document.getElementById("form");
let submit = document.getElementById("calculate");

const goombaValue = 5
const bombValue = 7
const cheepValue = 11

form.addEventListener('submit' , function(event){
    event.preventDefault()

    const goomba = form.elements["goomba"].value;
    const bobomb = form.elements["bobomb"].value;
    const cheepcheep = form.elements["cheepcheep"].value;

    const total = ((goomba * goombaValue) + (bobomb * bombValue) + (cheepcheep * cheepValue));
    document.getElementById("append").textContent = total
    }


)