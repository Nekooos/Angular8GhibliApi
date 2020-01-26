import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Object;

  constructor(private http: HttpService) { 

  }

  ngOnInit() {
    this.http.getAll('films').subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }

}
