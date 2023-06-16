import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryItemComponent } from './country-item/country-item.component';
import { AppComponent } from '../app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {path: '', component: CountryListComponent},
  {path: 'country/:id', component: CountryItemComponent},
];

@NgModule({
  declarations: [
    CountryItemComponent,
    AppComponent,
    CountryListComponent,
    CountryComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
  
})
export class CountryModule { }
