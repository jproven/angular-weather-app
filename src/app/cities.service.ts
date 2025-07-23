import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  private cities: any[] = [];
  private cityAtHome:any = {};

  constructor() {}

  isAlreadyAdded(city: any) {
    return this.cities.some((c) => c.id === city.id);
  }

  addCity(city: any) {
    if (!this.isAlreadyAdded(city)) {
      this.cities.push(city);
    }
  }

  getCities() {
    return this.cities;
  }

  removeCity(city: any) {
    this.cities = this.cities.filter((c) => c.id !== city.id);
  }

  setCityAtHome(city: any) {
    this.cityAtHome = city;
  }

  updateCity(city: any) {
    const index = this.cities.findIndex((c) => c.id === city.id);
    if (index !== -1) {
      this.cities[index] = city;
    }
  }
}
