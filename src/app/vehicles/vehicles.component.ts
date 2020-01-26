import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('vehicles').subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

}
