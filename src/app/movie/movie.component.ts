import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { People } from '../models/People';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../models/Movie';
import { Location } from '../models/Location';
import { ContentService } from '../service/content.service';
import { Specie } from '../models/Specie';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieId: string;
  peoples: People[];
  locations: Location[];
  species: Specie[];
  vehicles: Vehicle[];
  
  constructor(private contentService: ContentService, private movieService: MoviesService, private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.movieId = data['id'];
    });
    
    /*this.movieService.getMovieById('films', this.movieId).subscribe(data => {
      console.log(data);
      this.movie = data;
    });*/

    this.http.getGenericById('films', this.movieId).subscribe(data => {
      let movie = data as Movie;
      this.movie = movie;
    })
    
   
    //console.log(this.people);
  }

}
