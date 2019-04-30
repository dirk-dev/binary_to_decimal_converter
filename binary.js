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

submitButtonDecimal.onclick = () => {
  event.preventDefault()
  let decimalInput = document.querySelector('#decimalInput').value
  const decimalRegex = /^[0-9]{1,}$/
  if (decimalRegex.test(decimalInput)) {
    // array of values for wach binary digit
    const binaryArray = [
      32768,
      16384,
      8192,
      4096,
      2048,
      1024,
      512,
      256,
      128,
      64,
      32,
      16,
      8,
      4,
      2,
      1
    ]
    let binaryNumber = ''

    // test code to dynamically generate array

    const binaryValueArray = []
    let arraySeed = 1
    while (arraySeed <= decimalInput) {
      console.log(binaryValueArray)

      binaryValueArray.unshift(arraySeed)
      arraySeed = arraySeed * 2
    }
    console.log(binaryValueArray)

    /// //////////////////////
    for (let i = 0; (len = binaryArray.length), i < len; i++) {
      if (decimalInput >= binaryArray[i]) {
        // adds 1 to binary digit
        binaryNumber += 1
        decimalInput = decimalInput - binaryArray[i]
      } else {
        binaryNumber += 0
      }
    }

    // regex to add spaces after every 4 digits
    let binaryNumSpaces = binaryNumber.replace(/(\d{4})/g, '$1 ')
    // parseInt removes the leading zeros (original result was a string)
    document.querySelector('#binaryNum').innerHTML = binaryNumSpaces
  } else if (!decimalInput) {
    const querySelect = document.querySelector('#decimalInput')
    querySelect.classList.add('inputError')
    querySelect.value = 'Please enter a number.'
  } else {
    const querySelect = document.querySelector('#decimalInput')
    querySelect.classList.add('inputError')
    querySelect.value = 'Please enter digits only.'
  }
}
