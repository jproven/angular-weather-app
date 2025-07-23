import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []

  constructor() { }

  isAlreadyAdded(city: any) {
    return this.cities.some(c => c.id === city.id);
  }

  addCity(city: any) {
    if (!this.isAlreadyAdded(city)) {
      this.cities.push(city);
    }
  }
}

