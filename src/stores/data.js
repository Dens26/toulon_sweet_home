import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    // User
    user: {
      "email": '',
      "password": ''
    },
    // Accommodation
    accommodation: {}
  }),
  actions: {
    // User
    async userLogin() {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.user)
        };
        const response = await fetch("localhost/auth", requestOptions);
        if (!response.ok) {
          throw new Error(`Failed to log in: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        // Handle the response data according to your application's needs
        console.log("Login successful:", data);
      } catch (error) {
        console.error("An error occurred during login:", error.message);
        // Optionally, you can set an error state or display an error message to the user
      }
    },
    // Accommodation
    setAccommodation(accommodation) {
      this.accommodation = accommodation
      localStorage.setItem('accommodation', JSON.stringify(this.accommodation))
    },
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
    getAccommodationId() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation.id
    },
    getAccommodation() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation
    },
    getPictures() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation.pictures
    }
  }
})