/*Menyetting button number agar berfungsi ketika di click */
const numbers = document.querySelectorAll(".number")

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}


/*Mendefinisikan 3 variable untuk menyimpan 2 angka (PrevNumber sebagai angka pertama 
  dan currnetNumber sebagai angka kedua) serta calculationOperator sebagai sebuah operator*/
let prevNumber =''
let calculationOperator = ''
let currentNumber = '0'

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number  
  } else {
    currentNumber += number  
  }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

/*Mengaktifkan fungsi kalkulasinya kedalam sebuah aplikasi*/
const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

/*Membuat button AC agar berfungsi dan berjalan dengan baik*/
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

/*Membuat aplikasi dapat berfungsi dengan angka desimal*/
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}
/*Operator Persen*/

/*Memperbarui variable prevNumber hanya saat tombol operator diklik lebih dahulu*/
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

