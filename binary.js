const submitButtonBinary = document.querySelector('#binarySubmit')
const submitButtonDecimal = document.querySelector('#decimalSubmit')

submitButtonBinary.onclick = function () {
  event.preventDefault()
  let binaryNum = document.querySelector('#binaryNum').value
  const regex = /^[0|1]{1,}$/
  // checks that user input only binary digits
  if (regex.test(binaryNum)) {
    console.log(binaryNum)
    let decimalNumber = 0
    let numberMultiplier = 1
    for (let i = binaryNum.length - 1; i >= 0; i--) {
      if (binaryNum.charAt(i) === 1) {
        decimalNumber = decimalNumber + numberMultiplier
      }
      numberMultiplier = numberMultiplier * 2
    }
    document.querySelector('#decimalNum').innerHTML = decimalNumber
  } else if (!binaryNum) {
    alert('The input is empty. Please enter a binary number.')
  } else {
    alert('Please enter binary digits only.')
  }
}
