import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Location } from '../models/Location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Location[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('locations').subscribe(locations => {
      this.locations = locations as Location[];

     });
  }

}
