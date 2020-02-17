import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleId: string;
  vehicle: Vehicle;

  constructor(private http:HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.vehicleId = data['id'];
    });
    this.http.getById('vehicles', this.vehicleId).subscribe(vehicle => {
      this.vehicle = vehicle as Vehicle;
    });
  }

}
