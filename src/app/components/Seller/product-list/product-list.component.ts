import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  nameFilter: string = '';

  data: Product[] ;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getListProduct().subscribe(resp => this.data = resp);
  }

}
