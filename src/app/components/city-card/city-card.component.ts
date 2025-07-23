import { Component, Input } from '@angular/core';
import { CitiesService } from '../../cities.service';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {

  @Input() city:any;

  constructor(private citiesService: CitiesService) {}

  removeCity() {
    this.citiesService.removeCity(this.city);
  }

  setCityAtHome() {
    this.citiesService.setCityAtHome(this.city);
  }
}
