import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Specie } from '../models/Specie';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species: Specie[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('species').subscribe(species => {
      this.species = species as Specie[];
    });
  }

}
