import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Object;
  movieId: string;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.movieId = data['id'];
    });
    this.http.getById('films', this.movieId).subscribe(data => {
      this.movie = data;
    });
  }

}
