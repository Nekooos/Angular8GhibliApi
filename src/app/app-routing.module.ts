import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationsComponent } from './locations/locations.component';
import { SpeciesComponent } from './species/species.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeopleComponent } from './people/people.component';
import { LocationComponent } from './location/location.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'peoples/:id', component: PeopleComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: SpecieComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicles/:id', component: VehicleComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
