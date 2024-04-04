/**
 * 
 * @param {*} state 
 * @returns 
 */
export function emailVerification(state) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(state.user.email)) {
        state.error.emailError = "Veuillez saisir un e-mail valide"
        state.loginFormValid.emailValid = false
        state.registerFormValid.emailValid = false
        return false
    }
    state.error.emailError = ""
    state.loginFormValid.emailValid = true
    state.registerFormValid.emailValid = true
    return true
}

/**
 * 
 * @param {*} state 
 * @returns 
 */
export function passwordVerification(state) {
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?']
    const regexLowerCase = /[a-z]/
    const regexUpperCase = /[A-Z]/
    const regexDigit = /[0-9]/

    // Check the special character in password
    let find = false
    for (const char of specialChars) {
        if (state.user.password.includes(char)) {
            find = true
        }
    }
    if (!find) {
        state.error.passwordError = `Au moins un caractère spécial (!@#$%^&*()-_=+[]{}|;:'",.<>/?)`
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }

    // Check the lowercase character in password
    else if (!regexLowerCase.test(state.user.password)) {
        state.error.passwordError = "Au moins une minuscule"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }

    // Check the uppercase character in password
    else if (!regexUpperCase.test(state.user.password)) {
        state.error.passwordError = "Au moins une majuscule"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }

    // Check the digital character in password
    else if (!regexDigit.test(state.user.password)) {
        state.error.passwordError = "Au moins un chiffre";
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }
    // Check the password length
    else if (state.user.password.length < 12) {
        state.error.passwordError = "12 caractères minimum"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }
    else if (state.user.password.length > 30) {
        state.error.passwordError = "30 caractères maximum"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }
    state.error.passwordError = "";
    state.loginFormValid.passwordValid = true
    state.registerFormValid.passwordValid = true
    return true
}

export function passwordConfirmationVerification(state) {
    if (state.user.password != state.user.passwordConfirm) {
        state.error.passwordConfirmError = "Mot de passse de confirmation différent du mot de passe";
        state.registerFormValid.passwordConfirmValid = false
        return false
    }
    state.error.passwordConfirmError = ""
    state.registerFormValid.passwordConfirmValid = true
    return true
}

export function firstNameVerification(state) {
    state.user.firstName = state.user.firstName.charAt(0).toUpperCase() + state.user.firstName.slice(1).toLowerCase()

    const regexDigit = /[0-9]/
    if (regexDigit.test(state.user.firstName)) {
        state.error.firstNameError = "Ne doit pas contenir de nombre"
        state.registerFormValid.firstNameValid = false
        return false
    }
    else if (state.user.firstName.length < 2) {
        state.error.firstNameError = "2 caractères minimum"
        state.registerFormValid.firstNameValid = false
        return false
    }
    else if (state.user.firstName.length > 30) {
        state.error.firstNameError = "30 caractères maximum"
        state.registerFormValid.firstNameValid = false
        return false
    }
    state.error.firstNameError = ""
    state.registerFormValid.firstNameValid = true
    console.log(state.user.firstName)
    return true
}


export function lastNameVerification(state) {
    state.user.lastName = state.user.lastName.toUpperCase()

    const regexDigit = /[0-9]/
    if (regexDigit.test(state.user.lastName)) {
        state.error.lastNameError = "Ne doit pas contenir de nombre"
        state.registerFormValid.lastNameValid = false
        return false
    }
    else if (state.user.lastName.length < 2) {
        state.error.lastNameError = "2 caractères minimum"
        state.registerFormValid.lastNameValid = false
        return false
    }
    else if (state.user.lastName.length > 30) {
        state.error.lastNameError = "30 caractères maximum"
        state.registerFormValid.lastNameValid = false
        return false
    }
    state.error.lastNameError = ""
    state.registerFormValid.lastNameValid = true
    return true
}

export function userNameVerification(state) {
    if (state.user.userName.length < 2) {
        state.error.userNameError = "2 caractères minimum"
        state.registerFormValid.userNameValid = false
        return false
    }
    else if (state.user.userName.length > 30) {
        state.error.userNameError = "30 caractères maximum"
        state.registerFormValid.userNameValid = false
        return false
    }
    state.error.userNameError = ""
    state.registerFormValid.userNameValid = true
    return true
}

export function phoneNumberVerification(state) {
    if (state.user.phoneNumber.length < 10) {
        state.error.phoneNumberError = "10 caractères minimum"
        state.registerFormValid.phoneNumberValid = false
        return false
    }
    else if (state.user.phoneNumber.length > 20) {
        state.error.phoneNumberError = "20 caractères maximum"
        state.registerFormValid.phoneNumberValid = false
        return false
    }
    state.error.phoneNumberError = ""
    state.registerFormValid.phoneNumberValid = true
    return true
}