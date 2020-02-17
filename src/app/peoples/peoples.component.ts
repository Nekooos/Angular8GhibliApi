import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../service/http.service';
import { People } from '../models/People';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  peoples: People[];

  constructor(private http: HttpService) { }

  ngOnInit() {
   this.http.getAll('people').subscribe(peoples => {
    this.peoples = peoples as People[];
   });
  }

}
