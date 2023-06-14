import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { countryData } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  countries: any = countryData;

  constructor() { }

  getCountryItem(id: string): Observable<any> {
    const country = this.countries.find((item: any) => item.fifa === id);
    return of(country);
  }
}
