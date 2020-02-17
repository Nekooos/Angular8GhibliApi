import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'https://ghibliapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + 'films');
  }

  getMovieById(subject: string, id: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + subject + '/' + id);
  }

  getGenericById<T>(subject: string, id: string): Observable<T> {
    return this.http.get<T>(this.url + subject + '/' + id);
  }

  getAllGeneric<T>(subject: string): Observable<T[]> {
    return this.http.get<T[]>(this.url + subject);
  }

  getAll(subject: string) {
    return this.http.get(this.url + subject);
  }

  getById(subject: string, id: string) {
    return this.http.get(this.url + subject + '/' + id);
  }
}
