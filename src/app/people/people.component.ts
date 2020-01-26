import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleId: string;
  people: Object;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.peopleId = data['id'];
    });
    this.http.getById('people', this.peopleId).subscribe(data => {
      this.people = data;
    });
  }

}
