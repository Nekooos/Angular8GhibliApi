import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'https://ghibliapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll(subject: string) {
    return this.http.get(this.url + subject);
  }

  getById(subject: string, id: string) {
    return this.http.get(this.url + subject + '/' + id);
  }
}
