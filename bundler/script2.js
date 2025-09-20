email.addEventListener('keyup', (event) => {
    if (!isEmailValid(email.value)) {
        console.log('Email is invalid')
    } else {
        console.log('Email is valid')
    }
})

password.addEventListener('keyup', (event) => {

    console.log('Password length ', password.value.length)

})

// Vérifie si l'email est correct
const isEmailValid = (email) => {
    return email.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}