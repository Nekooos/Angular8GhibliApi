import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('vehicles').subscribe(vehicles => {
      this.vehicles = vehicles as Vehicle[];
    });
  }

}
