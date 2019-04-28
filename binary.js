const submitButtonBinary = document.querySelector('#binarySubmit')
const submitButtonDecimal = document.querySelector('#decimalSubmit')

// function to clear error message from input box
let clearErrorMsg = querySelect => {
  let inputMessage = document.querySelector(querySelect)
  inputMessage.onfocus = () => {
    document.querySelector(querySelect).classList.remove('inputError')

    inputMessage.value = ''
  }
}

clearErrorMsg('#binaryInput')
clearErrorMsg('#decimalInput')

submitButtonBinary.onclick = () => {
  event.preventDefault()
  let binaryInput = document.querySelector('#binaryInput').value
  const binaryRegex = /^[0|1]{1,}$/
  // checks that user inputs only binary digits
  if (binaryRegex.test(binaryInput)) {
    console.log(binaryInput)
    let decimalNumber = 0
    let numberMultiplier = 1
    // loop starts at rightmost digit and iterates leftwards
    for (let i = binaryInput.length - 1; i >= 0; i--) {
      if (binaryInput.charAt(i) == 1) {
        decimalNumber = decimalNumber + numberMultiplier
      }
      // doubles every time the loop is run
      numberMultiplier = numberMultiplier * 2
    }
    document.querySelector('#decimalNum').innerHTML = decimalNumber
  } else if (!binaryInput) {
    document.querySelector('#binaryInput').classList.add('inputError')
    document.querySelector('#binaryInput').value = 'Please enter a number.'
  } else {
    document.querySelector('#binaryInput').classList.add('inputError')
    document.querySelector('#binaryInput').value = 'Binary digits only.'
  }
}

submitButtonDecimal.onclick = () => {
  event.preventDefault()
  let decimalInput = document.querySelector('#decimalInput').value
  const decimalRegex = /^[0-9]{1,}$/
  if (decimalRegex.test(decimalInput)) {
  } else if (!decimalInput) {
    document.querySelector('#decimalInput').classList.add('inputError')
    document.querySelector('#decimalInput').value = 'Please enter a number.'
  } else {
    document.querySelector('#decimalInput').classList.add('inputError')
    document.querySelector('#decimalInput').value = 'Please enter digits only.'
  }
}
