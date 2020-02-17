import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { People } from '../models/People';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieId: string;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.movieId = data['id'];
    });
    
    /*this.movieService.getMovieById('films', this.movieId).subscribe(data => {
      console.log(data);
      this.movie = data;
    });*/

    this.http.getGenericById('films', this.movieId).subscribe(data => {
      console.log(data);
      this.movie = data as Movie;
    })
  }

}
