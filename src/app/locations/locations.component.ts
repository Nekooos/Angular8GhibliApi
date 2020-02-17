import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('locations').subscribe(locations => {
      this.locations = locations;
      console.log(locations);
     });
  }

}
