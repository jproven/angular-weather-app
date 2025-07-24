import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { DataApiService } from '../data-api.service';
import { CountryCodePipe } from '../country-code.pipe';

@Component({
  selector: 'app-search',
  imports: [ CountryCodePipe ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private results: any[] = [];

  constructor(private dataApi: DataApiService, 
              private citiesService: CitiesService) { }

  searchByName(name: string) {
    this.dataApi.searchByName(name).subscribe((data: any) => {
      let response = data
      this.results = response.list
    });
  }

  getResults() {
    return this.results 
  }

  isAlreadyAdded(city: any) {
    return this.citiesService.isAlreadyAdded(city);
  }

  addCity(city: any) {
    this.citiesService.addCity(city);
  }

}
