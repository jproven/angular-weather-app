import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities: any[] = [];
  private cityAtHome: any = {};

  constructor() {
    this.cities = JSON.parse(localStorage.getItem('cities') || '[]');
    this.cityAtHome = JSON.parse(localStorage.getItem('cityAtHome') || '{}');
  }

  isAlreadyAdded(city: any) {
    return this.cities.some((c) => c.id === city.id);
  }

  addCity(city: any) {
    if (!this.isAlreadyAdded(city)) {
      this.cities.push(city);
      this.saveAll();
    }
  }

  getCities() {
    return this.cities;
  }

  getCityAtHome() {
    return this.cityAtHome;
  }

  removeCity(city: any) {
    this.cities = this.cities.filter((c) => c.id !== city.id);
    this.saveAll();
  }

  setCityAtHome(city: any) {
    this.cityAtHome = city;
    this.saveAll();
  }

  updateCity(city: any) {
    const index = this.cities.findIndex((c) => c.id === city.id);
    if (index !== -1) {
      this.cities[index] = city;
    }
  }

  saveAll() {
    localStorage.setItem("cities",JSON.stringify(this.cities))
    localStorage.setItem("cityAtHome",JSON.stringify(this.cityAtHome))
  }
}
