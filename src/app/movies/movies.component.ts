import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Movie } from '../models/Movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesArray: Movie[] = [];
  selectedMovie: Movie;

  constructor(private http: HttpService, private movieService: MoviesService) { 

  }

  ngOnInit() {
    this.http.getAllGeneric('films').subscribe(movies => {
      this.moviesArray = movies as Movie[]
    });    
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  sortItems() {
    const movies = this.movieService.sortMoviesByDate(this.moviesArray);
  }
}    

