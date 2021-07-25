console.log("main.js")
const form = document.querySelector(".registration")
const email = document.querySelector(".register__email")
const errorText = document.querySelector(".error__msg")

const isEmail = function (email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
}

const emailValidation = function () {
   
    if (email.value.trim() === '') {
      errorText.classList.add("error__none")
        return false
    }
    if (!isEmail(email.value.trim())) {
        errorText.classList.add("error__none")
        errorText.innerHTML = 'Looks like this is not an email'
        return false
    }
    
    if (isEmail(email.value)) {
        errorText.classList.add("correct__format")
        errorText.innerHTML = `${email.value} is valid`
        return true
    } 
    return false
}

const eventHandler = function (target, handler) {
    target.addEventListener('input', function () {
        errorText.classList.remove("error__none")
        errorText.classList.remove("correct__format")
      handler()
    })
  }

  eventHandler(email, emailValidation)

form.addEventListener("submit", (evt) => {
    errorText.classList.remove("error__none")
    errorText.classList.remove("correct__format")
    evt.preventDefault()
    console.log(evt.target)
    emailValidation()
    /*
    if(emailValidation){
        alert(emailValidation())
    }*/
})