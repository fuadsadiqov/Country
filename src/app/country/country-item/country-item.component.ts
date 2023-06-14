import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent {
  
  public id: any = ''
  countryItemDetail: any
  constructor(private activatedRoute: ActivatedRoute, private restService: RestService){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id')      
    })
    if(this.id){
      this.restService.getCountryItem(this.id)
      .subscribe((res: any) => console.log(res))
    }
  } 
}
