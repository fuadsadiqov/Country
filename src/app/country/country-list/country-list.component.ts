import { Component } from '@angular/core';
import { CountryListInterface } from '../models/country-list.interface';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  public filteredCountryList!: CountryListInterface[]
  public countryList: CountryListInterface[] = []
  private isSortedName: boolean = false
  private isSortedPopulation: boolean = false
  private isSortedArea: boolean = false

  constructor(private restService: RestService){
    this.restService.getCountry()
    .subscribe((res: any) => {            
      this.countryList = res.pageProps.countries.map((item: any) => ({        
        name: item.name.common,
        population: item.population,
        area: item.area,
        flag: item.flags.png,
        fifa: item.fifa,
        query: item['cca3'],
        region: item.region
      }))
    })
  }
  sortByName(){
    this.isSortedName = !this.isSortedName
    if(this.isSortedName){
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => a.name.localeCompare(b.name))
    }else{
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => b.name.localeCompare(a.name))
    }
  }
  sortByArea(){
    this.isSortedArea = !this.isSortedArea 
    if(this.isSortedArea){
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => a.area - b.area)
    }else{
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => b.area - a.area)
    }
  }
  sortByPopulation(){
    this.isSortedPopulation = !this.isSortedPopulation
    if(this.isSortedPopulation){
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => a.population - b.population)
    }else{
      this.filteredCountryList = this.countryList.sort((a: any, b: any) => b.population - a.population)
    }
  }
  searchFunction(value: string){
    this.filteredCountryList = this.countryList.filter((item: CountryListInterface) => item.name.toLowerCase().includes(value.toLowerCase()))
  }
}
