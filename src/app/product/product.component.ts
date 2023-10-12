import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private service:ProductService){}
 products:any;
  ngOnInit(){
    this.service.getAll().subscribe((res)=>{
  this.products=res
    })
  }
  deleteItem(pobj:any){
    this.service.deleteproduct(pobj)
  }
  editcon(p:any){
    p.pedit=true;
  }
  updatecon(p:any){
    p.pedit=false;
  }
  }

