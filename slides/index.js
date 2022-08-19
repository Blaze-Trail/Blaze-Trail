let counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1
    }
}, 5000) 


let form = document.querySelector('#form');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let submit = document.querySelector('.submit');
let errorElement = document.querySelector('.error-message')

form.addEventListener('submit', e => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Name is required')

    }

    // if (password.value.length <= 6) {
    //     messages.push('Password must be greater than six characters')
    // }

    // if (password.value.length >= 20) {
    //     messages.push('Password must be less than 20 characters')
    // }

    // if (password.value === 'password') {
    //     messages.push('Password cannot be password ')
    // }

    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})

// let setError = (element, message) => {
//     let inputControl = element.parentElement;
//     let errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerHTML = message;
//     inputControl.classList.add('error-message')
//     inputControl.classList.remove('success')
// }

// let setSuccess = element => {
//     errorDisplay =
// }

// function validateInput() {
//     let usernameValue = username.value.trim();
//     let passwordValue = password.value.trim();

//     if (usernameValue === '') {
//         setError(username, 'Username is required')

//     }
// }