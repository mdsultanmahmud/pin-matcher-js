function getPin(){
    const pin = generatePin()
    const pinString = pin + ''
    if(pinString.length === 4){
        return pin
    }else{
        getPin()
    }
}

function generatePin(){
    let random = Math.floor(Math.random() * 10000)
    return random
}

document.getElementById('generate-btn').addEventListener('click', function(){
    let pin = getPin()
    // display pin 
    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin
})


document.getElementById('calculator').addEventListener('click', function(event){
    let number = event.target.innerText
    let displayNumberField = document.getElementById('show-number')
    const previousTypedNumber = displayNumberField.value
    if(isNaN(number)){
        if(number === 'C'){
            displayNumberField.value = ''
        } else if(number === '<'){
            const digits = previousTypedNumber.split('')
            digits.pop()
            const remaingDigits = digits.join('')
            displayNumberField.value = remaingDigits
        }
    }else{
        const newTypedNumber =previousTypedNumber+ number
        displayNumberField.value = newTypedNumber
    }
    
})


document.getElementById('submit-btn').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin')
    let displayNumberField = document.getElementById('show-number')
    // display error or success msg 
    const successBtn = document.getElementById('correct')
    const incorrectBtn = document.getElementById('incorrect')
    if(displayPinField.value == displayNumberField.value){
        successBtn.style.display = 'block'
        incorrectBtn.style.display = 'none'
    }else{
        incorrectBtn.style.display = 'block'
        successBtn.style.display = 'none'
    }

})