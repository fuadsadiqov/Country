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
  public pagingNumber: Array<number> = []

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
      for (let index = 0; index < this.countryList.length / 10; index++) {
        this.pagingNumber[index] = index + 1;
      }
      this.filteredCountryList = this.countryList.slice(0, 10)
    })
  }
  activePage(index: number){
    let startPaging = index * 10
    let endPaging = (index * 10) + 10
    this.filteredCountryList = this.countryList.slice(startPaging, endPaging)
  }
  sortByName(){
    this.isSortedName = !this.isSortedName
    if(this.isSortedName){
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => a.name.localeCompare(b.name))
    }else{
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => b.name.localeCompare(a.name))
    }
  }
  sortByArea(){
    this.isSortedArea = !this.isSortedArea 
    if(this.isSortedArea){
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => a.area - b.area)
    }else{
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => b.area - a.area)
    }
  }
  sortByPopulation(){
    this.isSortedPopulation = !this.isSortedPopulation
    if(this.isSortedPopulation){
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => a.population - b.population)
    }else{
      this.filteredCountryList = this.filteredCountryList.sort((a: any, b: any) => b.population - a.population)
    }
  }
  searchFunction(value: string){
    if(value != ''){
      this.filteredCountryList = this.countryList.filter((item: CountryListInterface) => item.name.toLowerCase().includes(value.toLowerCase()))
    }else{
      this.filteredCountryList = this.countryList.slice(0, 10)
    }
  }
}
