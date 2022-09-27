const fact = document.getElementById('fact')
const factText = document.getElementById('fact-text')
const numberInput = document.getElementById('number-input')

//using ajax
const getFactAjax = () => {
  const number = numberInput.value
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `http://numbersapi.com/${number}`)
  xhr.onload = () => {
    if (xhr.status == 200 && number) {
      fact.classList.remove('d-none')
      factText.innerText = xhr.response
    } else {
      fact.classList.add('d-none')
    }
  }

  xhr.send()
}

// using fetch
const getFactFetch = () => {
  const number = numberInput.value
  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
      if (number) {
        fact.classList.remove('d-none')
        factText.innerText = data
      } else {
        fact.classList.add('d-none')
      }
    })
    .catch(err => alert(err))
}

// numberInput.addEventListener('input', getFactFetch)
numberInput.addEventListener('input', getFactAjax)
