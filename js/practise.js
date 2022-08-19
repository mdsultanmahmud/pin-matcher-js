// working with generator part 

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
    const random = Math.floor(Math.random() * 10000)
    return random
}
document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = getPin()
    const displayPin = document.getElementById('display-pin')
    displayPin.value = pin
})


// working with number submit part 

document.getElementById('calculator').addEventListener('click', function(event){
    let number = event.target.innerText
    const typedNumberDisplaye = document.getElementById('show-number')
    let prevTypedNumber = typedNumberDisplaye.value
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberDisplaye.value = ''
        }else if(number === '<'){
            const allDigits = prevTypedNumber.split('')
            allDigits.pop()
            const remainingDigits = allDigits.join('')
            typedNumberDisplaye.value = remainingDigits
        }
    }else{
        const newTypedNumber =  prevTypedNumber + number
        typedNumberDisplaye.value = newTypedNumber
    }

})


document.getElementById('submit-btn').addEventListener('click', function(){
    const typedNumberDisplaye = document.getElementById('show-number')
    const displayPin = document.getElementById('display-pin')
    const correctBtn = document.getElementById('correct')
    const inCorrectBtn = document.getElementById('incorrect')
    if(typedNumberDisplaye.value === displayPin.value){
        correctBtn.style.display = 'block'
        inCorrectBtn.style.display = 'none'
    }else{
        correctBtn.style.display = 'none'
        inCorrectBtn.style.display = 'block'
    }
})