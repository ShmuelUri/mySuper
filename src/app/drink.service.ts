import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  public drinks = [{name:"Coke",liter:1.5,price:6.9 ,img:"https://metro.co.uk/wp-content/uploads/2016/06/ac_coke_giff.gif"},
                  {name:"Sprait",liter:1.5,price:9 ,img:"https://www.sprite.com/content/dam/coke2016/page-properties-images/Sprite_PageProperties.jpg"},
                  {name:"Spring",liter:1.5,price:6.9 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlI7ioxDzo41I_486GxAv76IffTIhx_8-BeUsxx4KZLAOTzXafeA&s"},
                  {name:"Sweps",liter:1.5,price:5 ,img:"https://www.coca-cola.ie/content/dam/journey/ie/en/hidden/drinks/Brands-lead-image/Journey-brands-Product-SCHW-BitterLemon2.jpg"},
                  {name:"Pepsi",liter:1.5,price:4.5 ,img:"https://www.brandchannel.com/wp-content/uploads/2018/09/Pepsi-Cans.jpg"},
                  ]
  public currentIndex = 2;
  constructor() { }
}
