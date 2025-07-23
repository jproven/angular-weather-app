import { Component } from '@angular/core';
import { CityCardComponent } from '../components/city-card/city-card.component';
import { CitiesService } from '../cities.service';
import { DataApiService } from '../data-api.service';

@Component({
  selector: 'app-manage',
  imports: [CityCardComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css',
})
export class ManageComponent {
  
  constructor(private citiesService: CitiesService,
              private dataApiService: DataApiService) 
                { this.citiesService.getCities().forEach( c => {
                    this.dataApiService.updateById(c.id).subscribe( 
                      json => {
                        this.citiesService.updateCity(json)
                      }
                    )
                })}

  getCities() {
    return this.citiesService.getCities();  
  }
}
