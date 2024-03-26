import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    accommodation: {}
  }),
  actions: {
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
    getAccommodation() {
      const accommodation = localStorage.getItem('accommodation')
      if (accommodation) {
        this.accommodation = JSON.parse(accommodation)
      }
      return this.accommodation
    }
  }
})