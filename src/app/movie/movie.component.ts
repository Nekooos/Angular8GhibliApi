import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Object;
  movieId: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.movieId = data['id'];
    });
    this.getMovie(this.movieId).subscribe(data => {
      this.movie = data;
    });
  }

  getMovie(id: string) {
    return this.http.get('https://ghibliapi.herokuapp.com/films/'+id);
  }

}
