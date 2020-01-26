import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('species').subscribe(species => {
      this.species = species;
    });
  }

}
