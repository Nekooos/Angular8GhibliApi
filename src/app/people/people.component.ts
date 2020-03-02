import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/People';
import { Movie } from '../models/Movie';
import { ContentService } from '../service/content.service';
import { Specie } from '../models/Specie';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleId: string;
  people: People;
  movies: Movie[];
  specie: Specie;

  constructor(private contentService: ContentService, private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.peopleId = data['id'];
    });
    this.http.getById('people', this.peopleId).subscribe(data => {
      let people = data as People;
      
      this.movies = this.contentService.returnObjects(people.films) as Movie[];
      this.people = people as People;
    });

  }

}
