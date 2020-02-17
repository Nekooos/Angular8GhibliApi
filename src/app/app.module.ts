import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { LocationsComponent } from './locations/locations.component';
import { SpeciesComponent } from './species/species.component';
import { SpecieComponent } from './specie/specie.component';
import { PeopleComponent } from './people/people.component';
import { LocationComponent } from './location/location.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { OrderByPipe } from './order-by.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    PageNotFoundComponent,
    PeoplesComponent,
    LocationsComponent,
    SpeciesComponent,
    SpecieComponent,
    PeopleComponent,
    LocationComponent,
    VehiclesComponent,
    VehicleComponent,
    OrderByPipe,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
