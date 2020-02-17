import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Movie } from '../models/Movie';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url: string = 'https://ghibliapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + 'films');
  }

  getMovieById(subject: string, id: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + subject + '/' + id);
  }

  sortMoviesByDate(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => {
      if (a.releaseDate > b.releaseDate) {
        return 1;
      }

      if (a.releaseDate < b.releaseDate) {
        return -1;
      }
      return 0;
    });
  }
}
