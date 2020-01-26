import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'https://ghibliapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url + 'films');
  }

  getMovie(id: string) {
    return this.http.get(this.url + 'films/' + id);
  }

  getPeoples() {
    return this.http.get(this.url + 'people');
  }

  getPeople(id: string) {
    return this.http.get(this.url + 'people/' + id);
  }

  getLocations() {
    return this.http.get(this.url + 'locations');
  }

  getLocation(id: string) {
    return this.http.get(this.url + 'locations/' + id);
  }

  getSpecies() {
    return this.http.get(this.url + 'species');
  }

  getSpecie(id: string) {
    return this.http.get(this.url + 'species/' + id);
  }

}
