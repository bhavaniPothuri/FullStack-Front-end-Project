import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:product[]=[
    {
      productId: "1",
      productName: "Lenovo",
      productPrice: "70000",
      productFeatures: "6GB RAM",
      productImg: "https://5.imimg.com/data5/GM/FT/MY-60122989/lenovo-laptops.jpg",
      pedit:false
    },

    {
      productId: "2",
      productName: "hp",
      productPrice: "32490",
      productFeatures: "4GB RAM",
      productImg: "https://m.media-amazon.com/images/I/91oF9q-jE5L.jpg",
      pedit:false
    },

    {
      productId: "3",
      productName: "dell",
      productPrice: "60,000",
      productFeatures: "8GB RAM",
      productImg: "https://m.media-amazon.com/images/I/61enrCge7ML.jpg",
      pedit:false
    },
    {
      productId: "4",
      productName: "Macbook",
      productPrice: "1,70,000",
      productFeatures: "12gb RAM",
      productImg: "https://static.toiimg.com/photo/msid-97249114/97249114.jpg",
      pedit:false
    },
    {
      productId: "5",
      productName: "ElightBook",
      productPrice: "80,000",
      productFeatures: "8GB RAM",
      productImg: "https://5.imimg.com/data5/SELLER/Default/2021/3/YE/VN/KU/112920323/hp-laptop.jpg",
      pedit:false
    },
    {
      productId: "6",
      productName: "Tuf Gaming",
      productPrice: "90,000",
      productFeatures: "6GB RAM",
      productImg: "https://cdn1.smartprix.com/rx-iADGj9Apc-w1200-h1200/ADGj9Apc.jpg",
      pedit:false
    }
     ]
  getAll(){
  return of (this.products)
}
addproduct(pobj:any){
  this.products.push(pobj);
}
deleteproduct(prod:any){
  const ind=this.products.findIndex((obj)=>obj.productId==prod.productId)
  this.products.splice(ind,1);
}
updateproduct(prod:any){
  this.products.forEach((obj,ind)=>{
    if(obj.productId==prod.productId){
      this.products.splice(ind,1,prod);
    }
  })
  
}
}
