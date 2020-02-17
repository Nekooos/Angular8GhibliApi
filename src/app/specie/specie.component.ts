import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Specie } from '../models/Specie';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
  specieId: string;
  specie: Specie;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.specieId = data['id'];
    });
    this.http.getById('species', this.specieId).subscribe(data => {
      this.specie = data as Specie;
    });
  }

}
