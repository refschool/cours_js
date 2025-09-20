btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (isEmailValid(email.value) && password.value.length > 8) {
        alert("Form is valid")
    } else {
        alert("Form is invalid")

    }
})