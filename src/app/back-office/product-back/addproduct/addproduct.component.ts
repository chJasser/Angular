 import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from 'src/Model/Produit';
import { ProductSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ps:ProductSService) { }
  produit: FormGroup;
  myProduit: Produit;
  ngOnInit(): void {
   /*  this.produit = new FormGroup({
      id: new FormControl(),
      qteMin: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      libelleStock: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
    }); */
  }

  /* addProduct() {
    this.myProduit = new Produit(
      this.stock.get('qteMin').value,
      this.stock.get('libelleStock').value
    );

    console.log(this.myStock);
    this.stockService.addStock(this.myStock).subscribe((res) => {
      console.log('stock created!', res);
    });
    
  } 
  */
}
