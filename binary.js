const submitButton = document.querySelector('#binarySubmit')
const regex = /[0-1]/

submitButton.onclick = function () {
  event.preventDefault()
  let binaryNum = document.querySelector('#binaryNum').value
  // checks that user input only binary digits
  if (regex.test(binaryNum)) {
    let binaryNum = document.getElementById('binaryNum').value
    console.log(binaryNum)
  } else {
    alert('Please enter the correct input.')
  }
  // console.log(binaryNum.length)
  let decimalNumber = 0
  let numberMultiplier = 1
  for (let i = binaryNum.length - 1; i >= 0; i--) {
    console.log(`iteration ${i}: ${binaryNum.charAt(i)}`)
    if (binaryNum.charAt(i) == 1) {
      decimalNumber = decimalNumber + numberMultiplier
    }
    numberMultiplier = numberMultiplier * 2
    console.log('numberMultiplier:', numberMultiplier)
    console.log('------------------')
  }
  console.log('decimal number:', decimalNumber)
  document.querySelector('#decimalNum').innerHTML = decimalNumber
}
