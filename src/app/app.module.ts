import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ButtonModule, PaginatorModule, BrowserAnimationsModule, MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
