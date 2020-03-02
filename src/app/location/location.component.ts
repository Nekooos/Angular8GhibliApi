import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../models/Location';
import { Movie } from '../models/Movie';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location: Location;
  locationId: string;
  movies: Movie[];

  constructor(private http: HttpService, private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.locationId = data['id'];
    });

    this.http.getById('locations', this.locationId).subscribe(data => {
      let location = data as Location; 
      this.location = location;

      this.movies = this.contentService.returnObjects(location.films) as Movie[];
    });
  }
}
