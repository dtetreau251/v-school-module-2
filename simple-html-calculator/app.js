const additionForm = document.getElementById ("additionForm")
const subtractionForm = document.getElementById ("subtractionForm")
const multiplicationForm = document.getElementById ("multiplicationForm")

additionForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstAdditionInput = additionForm.firstAdditionInput.value
    const secondAdditionInput = additionForm.secondAdditionInput.value
    additionForm.firstAdditionInput.value = ""
    additionForm.secondAdditionInput.value = ""

    const h2 = document.createElement('h2')
    let sum = parseInt(firstAdditionInput) + parseInt(secondAdditionInput)
    h2.textContent = sum
    document.body.appendChild(h2).remove()
    document.body.appendChild(h2)
})

subtractionForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstSubtractionInput = subtractionForm.firstSubtractionInput.value
    const secondSubtractionInput = subtractionForm.secondSubtractionInput.value
    subtractionForm.firstSubtractionInput.value = ""
    subtractionForm.secondSubtractionInput.value = ""
    
    const h2 = document.createElement('h2')
    let difference = parseInt(firstSubtractionInput) - parseInt(secondSubtractionInput)
    h2.textContent = difference
    document.body.appendChild(h2).remove()
    document.body.appendChild(h2)
})

multiplicationForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstMultiplicationInput = multiplicationForm.firstMultiplicationInput.value
    const secondMultiplicationInput = multiplicationForm.secondMultiplicationInput.value
    multiplicationForm.firstMultiplicationInput.value = ""
    multiplicationForm.secondMultiplicationInput.value = ""
    
    const h2 = document.createElement('h2')
    let product = parseInt(firstMultiplicationInput) * parseInt(secondMultiplicationInput)
    h2.textContent = product
    document.body.appendChild(h2).remove()
    document.body.appendChild(h2)
})

