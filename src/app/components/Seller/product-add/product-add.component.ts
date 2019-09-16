import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/domain/product';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  pdt: Product;
  data: Observable<Product>;


  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    photo1: new FormControl('')
  });

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {}

  // addProductHandler(){
  //   this.service.postProduct(this.pdt).subscribe();
  // }

  onSubmit(p: Product) {
    console.log(this.productForm.value);

    this.service.postProduct(p).subscribe(
      pdt => { console.log('The Product' + p.name + 'was successfully addded');
                this.router.navigateByUrl('/seller/refresh'); },
      err => console.log('ATTENTION! An exception happened: ' + err)
    );
  }
}
