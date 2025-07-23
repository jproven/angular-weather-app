import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private urlBase = "https://api.openweathermap.org/data/2.5/"
  private urlSufix = "${environment.weatherApiKey}&units=metric"

  constructor(private http:HttpClient) { }

  updateById(id: number) {
    return this.http.get(`${this.urlBase}weather?id=${id}${this.urlSufix}`);
  }

  searchByName(name: string) {
    return this.http.get(`${this.urlBase}find?q=${name}${this.urlSufix}`);
  }
}
