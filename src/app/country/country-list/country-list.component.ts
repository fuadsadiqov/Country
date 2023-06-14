import { Component } from '@angular/core';
import { countryData } from 'src/data'
import { CountryListInterface } from '../models/country-list.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  data: any = countryData
  filteredCountryList!: CountryListInterface[]
  countryList: CountryListInterface[] = this.data.map((item: any) => ({
    name: item.name.common,
    population: item.population,
    area: item.area,
    flag: item.flags.png,
    fifa: item.fifa
  })) 

  
  searchFunction(value: string){
    this.filteredCountryList = this.countryList.filter((item: CountryListInterface) => item.name.toLowerCase().includes(value.toLowerCase()))
  }
}
