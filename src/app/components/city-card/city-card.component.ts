import { Component, Input } from '@angular/core';
import { CitiesService } from '../../cities.service';
import { CountryCodePipe } from '../../country-code.pipe';
import { TempPipe } from '../../temp.pipe';

@Component({
  selector: 'app-city-card',
  imports: [ TempPipe, CountryCodePipe ],
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
