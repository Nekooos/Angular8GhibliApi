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

}
