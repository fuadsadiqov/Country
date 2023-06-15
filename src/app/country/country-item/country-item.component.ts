import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CountryDetailInterface } from '../models/country-detail.interface';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})

export class CountryItemComponent {
  
  public id: any = ''
  countryItemDetail!: CountryDetailInterface
  constructor(private activatedRoute: ActivatedRoute, private restService: RestService){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id')
    })
    if(this.id){
      this.restService.getCountry()
      .subscribe((res: any) => {
        const country = res.pageProps.countries.find((item: any) => item.fifa === this.id)
        this.countryItemDetail = country as CountryDetailInterface;
        console.log(this.countryItemDetail);
        
      })      
    }
  } 
}
