import { Component } from '@angular/core';
import { CitiesService } from '../../cities.service';
import { DataApiService } from '../../data-api.service';

@Component({
  selector: 'app-city-at-home',
  imports: [],
  templateUrl: './city-at-home.component.html',
  styleUrl: './city-at-home.component.css',
})

export class CityAtHomeComponent {
  
  constructor(
    private citiesService: CitiesService,
    private dataApiService: DataApiService) {
      this.dataApiService.updateById(this.citiesService.getCityAtHome().id).subscribe(
        city => {
          this.citiesService.setCityAtHome(city);
        }
      )
    }

  getCityAtHome() {
    return this.citiesService.getCityAtHome();
  }
}
