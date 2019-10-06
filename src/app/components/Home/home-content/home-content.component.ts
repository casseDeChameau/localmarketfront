import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/domain/product';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  // VARIABLES
  lat: number;
  lng: number;
  origin: any;
  destination: any;

  pdt: Product;

  name: string;
  findProductForm = new FormControl();

  // CONSTRUCTOR
  constructor(private service: ProductService,
              private route: ActivatedRoute) { }



  // METHODS
  ngOnInit() {
    this.getDirection();
  //   this.name = this.route.snapshot.paramMap.get('name');
  //   this.service.getProductByName(this.name)
  //         .subscribe(
  //             reponse => this.pdt = reponse,
  //             err => console.log ('ATTENTION, Erreur : ' + err)
  // );
  }
  getDirection() {
    this.origin = { lat: 50.8378, lng: 4.351699999999937 };
    this.destination = { lat: 50.84705812429947, lng: 4.336767196655273 };
  }

  // onSubmit(name: string) {
  //   console.log(this.findProductForm.value);
  //   this.service.getResearchedProduct(name).subscribe(
  //     pdt => { console.log('The Product' + name + 'was successfully found'); },
  //     err => console.log('ATTENTION! An exception happened: ' + err)
  //   );
  // }

}
