const submitButtonBinary = document.querySelector('#binarySubmit')
const submitButtonDecimal = document.querySelector('#decimalSubmit')

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
    alert('The input is empty. Please enter a binary number.')
  } else {
    alert('Please enter binary digits only.')
  }
}

submitButtonDecimal.onclick = () => {
  event.preventDefault()
  let decimalInput = document.querySelector('#decimalInput').value
  const decimalRegEx = /^[0-9]{1,}$/
  console.log(decimalInput)
}
