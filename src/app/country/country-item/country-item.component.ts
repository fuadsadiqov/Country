import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})

export class CountryItemComponent{
  
  public id: any = ''
  public countryItemDetail!: any
  public borderCountryWrapper: any[] = []

  constructor(private activatedRoute: ActivatedRoute, private restService: RestService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id')
        this.restService.getCountry()
        .subscribe((res: any) => {
          this.countryItemDetail = res.pageProps.countries.find((item: any) => item['cca3'] === this.id)
          console.log(this.countryItemDetail);
          if(this.countryItemDetail.borders){
            this.countryItemDetail.borders.map((item: any) => {
              this.restService.getBorderCountries(item)
              .subscribe((borderRes: any) => {
                this.borderCountryWrapper = [...this.borderCountryWrapper, borderRes[0]]             
              })
              this.borderCountryWrapper = []
            })
          }
        })
    })
  
  } 
  
  
}