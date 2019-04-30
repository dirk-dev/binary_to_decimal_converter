const submitButtonBinary = document.querySelector('#binarySubmit')

// function to clear error message from input box
let clearErrorMsg = querySelect => {
  let inputMessage = document.querySelector(querySelect)
  inputMessage.onfocus = () => {
    document.querySelector(querySelect).classList.remove('inputError')

    inputMessage.value = ''
  }
}

clearErrorMsg('#binaryInput')

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
    // to evaluate lowest binary digit value first
    for (let i = binaryInput.length - 1; i >= 0; i--) {
      if (binaryInput.charAt(i) == 1) {
        decimalNumber = decimalNumber + numberMultiplier
      }
      // doubles every time the loop is run
      numberMultiplier = numberMultiplier * 2
    }
    document.querySelector('#decimalNum').innerHTML = decimalNumber
  } else if (!binaryInput) {
    // user input errors
    const querySelect = document.querySelector('#binaryInput')
    querySelect.classList.add('inputError')
    querySelect.value = 'Please enter a number.'
  } else {
    const querySelect = document.querySelector('#binaryInput')
    querySelect.classList.add('inputError')
    querySelect.value = 'Binary digits only.'
  }
}
