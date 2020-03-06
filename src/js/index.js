import '../scss/index.scss'
import '@babel/polyfill'
import '../images/BMI_Logo.png'
import '../images/BMI_Footer_Logo.png'
import '../images/icons_loop.png'


const result = document.getElementById('result')
const list = document.querySelector('.list')
const h = document.getElementById('height')
const w = document.getElementById('weight')
const bmiValue = document.getElementById('bmiValue')
const bmiText = document.getElementById('bmiText')
const statusText = document.getElementById('statusText')
const buttonIcon = document.getElementById('buttonIcon')

let record = JSON.parse(localStorage.getItem('bmiData')) || []

updateList(record)

result.addEventListener('click', calcBMI)
list.addEventListener('click', deleteList)
h.addEventListener('blur', checkValue)
w.addEventListener('blur', checkValue)
buttonIcon.addEventListener('click', refresh)

function calcBMI(e) {
  if(e.target.nodeName === 'DIV') { return }
  if(e.target.className === 'btn' || e.target.className === 'bmiValue') {
    let height = parseInt(h.value)
    let weight = parseInt(w.value)

    if(!height || !weight) { 
      alert('請填寫數字')
      h.value = ''
      w.value = ''
      return
    }

    let bmi = (weight / Math.pow((height / 100), 2)).toFixed(1)

    let today = new Date()
    let yyyy = today.getFullYear()
    let mm = today.getMonth() + 1
    let dd = today.getDate()
    let time = mm + '-' + dd + '-' + yyyy

    let status = ''
    let statusColor = ''

    if(18.5 > bmi) {
      status = '過輕'
      statusColor = 'tooLight'
    } else if (18.5 <= bmi && bmi <= 25) {
      status = '理想'
      statusColor = 'ideal'
    } else if(25 < bmi && bmi <= 30) {
      status = '過重'
      statusColor = 'tooHeavy'
    } else if(30 < bmi && bmi <= 35) {
      status = '輕度肥胖'
      statusColor = 'mildObesity'
    } else if(35 < bmi && bmi < 40) {
      status = '中度肥胖'
      statusColor = 'moderateObesity'
    } else {
      status = '重度肥胖'
      statusColor = 'severeObesity'
    }

    let data = {
      status,
      bmi,
      height,
      weight,
      time,
      statusColor
    }

    record.push(data)
    localStorage.setItem('bmiData', JSON.stringify(record))

    updateList(record)

    bmiValue.textContent = bmi
    bmiText.textContent = 'BMI'
    statusText.textContent = status
    result.setAttribute('class', 'btn-' + `${statusColor}`)
    statusText.setAttribute('class', 'color-' + `${statusColor}`)
    bmiValue.removeAttribute('class')

    h.value = ''
    w.value = ''
  }
}

function deleteList(e) {
  if(e.target.nodeName !== 'I') { return }
  let index = e.target.dataset.index
  record.splice(index, 1)

  localStorage.setItem('bmiData', JSON.stringify(record))
  updateList(record)
}

function updateList(record) {
  let str = ''

  record.forEach((e, i) => {
    str += `
      <div class="list__record">
        <div class="border-left-${e.statusColor}"></div>
        <li class="status">${e.status}</li>
        <li>
          BMI
          <span>${e.bmi}</span>
        </li>
        <li>
          weight
          <span>${e.weight}kg</span>
        </li>
        <li>
          height
          <span>${e.height}cm</span>
        </li>
        <li>${e.time}</li>
        <li><i class="fas fa-times fa-2x" data-index=${i}></i></li>
      </div>
    `
  })

  list.innerHTML = str
}

function checkValue(e) {
  let value = e.target.value
  if(!value) {
    alert('尚未填入數字') 
    return
  }
}

function refresh() {
  result.setAttribute('class', 'btn')
  bmiValue.textContent = '看結果'
  bmiText.textContent = ''
  statusText.textContent = ''
  bmiValue.setAttribute('class', 'bmiValue')
}