import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleId: string;
  people: People;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.peopleId = data['id'];
    });
    this.http.getById('people', this.peopleId).subscribe(data => {
      this.people = data as People;
    });
  }

}
