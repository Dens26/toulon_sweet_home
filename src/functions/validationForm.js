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

    // Check the password length
    if (state.user.password.length < 12) {
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
    if (!regexLowerCase.test(state.user.password)) {
        state.error.passwordError = "Au moins une minuscule"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }

    // Check the uppercase character in password
    if (!regexUpperCase.test(state.user.password)) {
        state.error.passwordError = "Au moins une majuscule"
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }

    // Check the digital character in password
    if (!regexDigit.test(state.user.password)) {
        state.error.passwordError = "Au moins un chiffre";
        state.loginFormValid.passwordValid = false
        state.registerFormValid.passwordValid = false
        return false
    }
    state.error.passwordError = "";
    state.loginFormValid.passwordValid = true
    state.registerFormValid.passwordValid = true
    return true
}