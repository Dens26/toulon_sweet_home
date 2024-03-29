import { defineStore } from 'pinia'
import { emailVerification, passwordVerification } from '../functions/validationForm.js'
import { useRouter } from 'vue-router'

export const useDataStore = defineStore('data', {
  state: () => ({
    router: useRouter(),
    // Connection status
    connectionStatus: {
      value: ''
    },

    // NavBar
    navbar: {
      account: {
        name: '',
        route: '',
        class: ''
      },
      registration: {
        name: '',
        route: ''
      },
    },

    // User
    user: {
      "email": '',
      "password": ''
    },
    token: {},

    // Accommodation
    accommodation: {},

    // alertMessage
    alertMessage: {
      type: '',
      message: ""
    },
    // Form validation
    loginFormValid: {
      emailValid: false,
      passwordValid: false
    },
    // Form validation
    registerFormValid: {
      emailValid: false,
      passwordValid: false
    },
    // Error management
    error: {
      emailError: "",
      passwordError: ""
    },
  }),
  actions: {
    //#region Authentification
    setConnecionStatus(value) {
      if (value) {
        this.connectionStatus.value = true
        this.navbar.account.name = 'Mon Compte'
        this.navbar.account.route = "account"
        this.navbar.account.class = 'btn btn-success text-red'
        this.navbar.registration.name = ''
        this.navbar.registration.route = ''
      }
      else {
        this.connectionStatus.value = false
        this.navbar.account.name = 'Connexion'
        this.navbar.account.route = "login"
        this.navbar.account.class = ''
        this.navbar.registration.name = 'Inscription'
        this.navbar.registration.route = "register"
      }
      localStorage.setItem('connectionStatus', JSON.stringify(this.connectionStatus))
    },
    getConnectionStatus() {
      const connectionStatus = localStorage.getItem('connectionStatus')
      if (connectionStatus) {
        this.setConnecionStatus(JSON.parse(connectionStatus).value)
      }
      else {
        this.setConnecionStatus(false)
      }

      return this.connectionStatus
    },
    getpayload() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = JSON.parse(token)
      }
      const parts = this.token.split('.')
      return JSON.parse(atob(parts[1]))
    },
    //#endregion
    
    //#region user
    /**
     * Attempts to connect the user to the API and retrieve the connection token
     */
    async userLogin() {
      // Initialize connection status to false
      let loginFormValid = true
      for (const key in this.loginFormValid) {
        if (!this.loginFormValid[key]) {
          loginFormValid = false
        }
      }
      if (!loginFormValid) {
        this.alertMessage = {
          "type": "warning",
          "message": "Le formulaire n'est pas valide"
        }
      }
      else {
        try {
          // Set up request options for login
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.user)
          };
          // Send login request to the server
          const response = await fetch("http://localhost/auth", requestOptions);

          // Check if connection is successful
          if (!response.ok) {
            this.setConnecionStatus(false)
            throw new Error(`Echec de connexion: ${response.status} ${response.statusText}`)
          }
          else {
            const data = await response.json()

            this.token = data.token;
            localStorage.setItem('token', JSON.stringify(this.token))

            // Update connection status to true
            this.setConnecionStatus(true)

            this.alertMessage = {
              "type": "",
              "message": ""
            }
          }
          this.router.push({ name: 'home' })
        } catch (error) {
          this.setConnecionStatus(false)
          this.alertMessage = {
            "type": "danger",
            "message": "Echec de connexion. Votre compte ou mot de passe est incorrect"
          }
        }
      }
    },
    userLogout() {
      localStorage.removeItem('token')
      localStorage.removeItem('connectionStatus')
    },
    //#endregion


    //#region Accommodation
    /**
     * Set new accommodation
     * @param {json} accommodation 
     */
    setAccommodation(accommodation) {
      this.accommodation = accommodation
      localStorage.setItem('accommodation', JSON.stringify(this.accommodation))
    },
    /**
     * 
     * @param {string} streetName 
     * @param {string} streetNumber 
     * @param {string} postal 
     * @param {string} city 
     * @param {string} country 
     * @param {string} pictures 
     * @param {string} host 
     */
    updateAccommodation(streetName, streetNumber, postal, city, country, pictures, host) {
      this.accommodation.streetName = streetName
      this.accommodation.streetNumber = streetNumber
      this.accommodation.postal = postal
      this.accommodation.city = city
      this.accommodation.country = country
      this.accommodation.pictures = pictures
      this.accommodation.host = host
      localStorage.setItem('accommodation', JSON.stringify(this.accommodation))
    },
    /**
     * 
     * @returns 
     */
    getAccommodationId() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation.id
    },
    /**
     * 
     * @returns 
     */
    getAccommodation() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation
    },
    /**
     * 
     * @returns 
     */
    getPictures() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation.pictures
    },
    //#endregion

    //#region Features
    /**
     * 
     * @param {json} alertMessage 
     */
    setAlertMessage(alertMessage) {
      this.alertMessage = alertMessage
    },
    /**
     * 
     * @returns 
     */
    getAlertMessage() {
      return this.alertMessage
    },
    //#endregion
  },

  getters: {
    /**
     * Verification method for email
     * @param {string} state 
     * @returns 
     */
    emailVerification(state) {
      return emailVerification(state)
    },

    /**
     * Verificaiton method for password
     * @param {string} state 
     * @returns 
     */
    passwordVerification(state) {
      return passwordVerification(state)
    }
  }
})