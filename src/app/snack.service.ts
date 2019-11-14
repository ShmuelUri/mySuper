import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  public snacks = [{name:"Bislee",price:4.5 ,img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QNKFxVezapeAtiR4lumtp4kt-UxWYWqNgfF51zyEjwrHJx81&s"},
                    {name:"Bamba",price:4.5 ,img :"https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e4ba68bf-8052-4065-b0ee-c0e193e24c3d.png"},
                    {name:"Doritos",price:4.5 ,img :"https://target.scene7.com/is/image/Target/GUEST_ac2b08b4-12e8-496c-ab09-dd530740da9c?wid=488&hei=488&fmt=pjpeg"},];
  public currentIndex = 0;

  constructor() { }
}
