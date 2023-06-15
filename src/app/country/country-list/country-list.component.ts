import { Component } from '@angular/core';
import { CountryListInterface } from '../models/country-list.interface';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  filteredCountryList!: CountryListInterface[]
  countryList: CountryListInterface[] = []

  constructor(private restService: RestService){
    this.restService.getCountry()
    .subscribe((res: any) => {      
      this.countryList = res.pageProps.countries.map((item: any) => ({        
        name: item.name.common,
        population: item.population,
        area: item.area,
        flag: item.flags.png,
        fifa: item.fifa
      }))
    })
  }
  
  searchFunction(value: string){
    this.filteredCountryList = this.countryList.filter((item: CountryListInterface) => item.name.toLowerCase().includes(value.toLowerCase()))
  }
}
