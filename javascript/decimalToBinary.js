const submitButtonDecimal = document.querySelector('#decimalSubmit')

// function to clear error message from input box
let clearErrorMsg = querySelect => {
  let inputMessage = document.querySelector(querySelect)
  inputMessage.onfocus = () => {
    document.querySelector(querySelect).classList.remove('inputError')

    inputMessage.value = ''
  }
}

clearErrorMsg('#decimalInput')

submitButtonDecimal.onclick = () => {
  event.preventDefault()
  let decimalInput = document.querySelector('#decimalInput').value
  const decimalRegex = /^[0-9]{1,}$/
  if (decimalRegex.test(decimalInput)) {
    let binaryNumber = ''

    // dynamically generates array based on user input
    const binaryArray = []
    let arrayElement = 1
    while (arrayElement <= decimalInput) {
      binaryArray.unshift(arrayElement)
      arrayElement = arrayElement * 2
    }
    console.log(binaryArray)

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
