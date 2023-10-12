import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
pid:any;
pname:any;
pprice:any;
pfeatures:any;
pimg:any;
pobj:any;

constructor(private service:ProductService,private route:Router){}
adding(){
  this.pobj={
    productId:this.pid,
    productName:this.pname,
    productprice:this.pprice,
    productfeatures:this.pfeatures,
    productimage:this.pimg,
  }
  this.service.addproduct(this.pobj);
  this.route.navigateByUrl('/products')
}
}
