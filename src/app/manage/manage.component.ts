import { Component } from '@angular/core';
import { CityCardComponent } from '../components/city-card/city-card.component';
import { CitiesService } from '../cities.service';
import { DataApiService } from '../data-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  imports: [FormsModule, CityCardComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css',
})
export class ManageComponent {
  searchTerm: string = '';
  filteredCities: any[] = [];

  constructor(
    private citiesService: CitiesService,
    private dataApiService: DataApiService
  ) {
    this.citiesService.getCities().forEach((c) => {
      this.dataApiService.updateById(c.id).subscribe((json) => {
        this.citiesService.updateCity(json);
      });
    });
  }

  getCities() {
    if (this.searchTerm.trim() === '') {
      return this.citiesService.getCities();
    } else {
      return this.filteredCities;
    }
  }

  searchCity() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filteredCities = this.citiesService
      .getCities()
      .filter((city) => city.name.toLowerCase().includes(term));
  }
}
