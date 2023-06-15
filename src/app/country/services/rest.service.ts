import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService{
  baseUrl: string = 'https://world-ranks-ruby-xi.vercel.app/_next/data/Vhmj_S6cn6K3nK0NSclVI/index.json'
  
  constructor(private http: HttpClient) {}
  
  getCountry(){
    return this.http.get(this.baseUrl)
  }
  getCountryItem(id: string): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => {
        const country = res.pageProps.countries.find((item: any) => item.fifa === id);
        console.log(country);
        
        return country;
      })
    );
  }
}