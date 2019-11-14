import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookingService {
public cookings =[{name : "Katshope" , price: 12.5 , img :"https://cdn0.woolworths.media/content/wowproductimages/large/083563.jpg"},
                  {name : "Myonez" , price: 14.9 , img :"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16300532/heinz-sarimsakli-mayonez-400ml-b3c07b.jpg"},
                  {name : "Oil" , price: 18.5 , img :"https://www.altitud1080.com/wp-content/uploads/2019/04/BOTELLA-500-600px.gif"},
                  {name : "Sugguar" , price: 4.5 , img :"https://www.sugat.com/wp-content/uploads/2016/05/Sugat_Suger_DakDak_1.jpg"}];
public currentIndex = 0;
  constructor() { }
}
