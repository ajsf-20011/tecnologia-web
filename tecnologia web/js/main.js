const contentDisable = document.querySelector('.inputs-disable')
const inputsDisabled = document.querySelectorAll('.inputs-disable input')
const card = document.querySelector('#card-credit')
const date = document.querySelector('#date')
const cvv = document.querySelector('#cvv')


showInputs = () => {
   contentDisable.addEventListener('click', function () {
      if (contentDisable.getAttribute("aria-selected") == 'true') {
         inputsDisabled.forEach((item) => {
            item.removeAttribute('disabled')
         })
         return true
      }
   })
}

validateCreditCard = () => {
   card.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
   });
}

validateDate = () => {
   date.addEventListener('input', function (e) {
      if (e.target.value.length == 2) {
         e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/')
         return true
      }
   })
}

validateCVV = () =>{
   cvv.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/[^\dA-Z]/g, '')
   });
}


showInputs()
validateCreditCard()
validateDate()
validateCVV()