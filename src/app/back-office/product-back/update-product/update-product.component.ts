import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { detailProduit } from 'src/Model/detaiProduit';
import { Produit } from 'src/Model/Produit';
import { Stock } from 'src/Model/Stock';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { StockService } from '../../stock/stock.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  detailProduit: detailProduit;
  ListStock:Stock[];
  idStockProduit:number;

  constructor(private ps:ProduitSService,private ss:StockService,private router:Router) { }
  
  @Output() updateProductStatus = new EventEmitter<boolean>();
  @Input() selectedProduct: Produit;
  @Output() updated = new EventEmitter<Produit>();
  ngOnInit(): void {


console.log(this.selectedProduct);

  }
  Product: FormGroup;
  myProduct: any;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedProduct.firstChange) {
      this.Product = new FormGroup({
        id: new FormControl(this.selectedProduct.idProduit),
        prixUnitaire: new FormControl(this.selectedProduct.prixUnitaire, [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        libelle: new FormControl(this.selectedProduct.libelle, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z]*$'),
        ]),
        code: new FormControl(this.selectedProduct.code, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z]*$'),
        ]),
        category: new FormControl(this.selectedProduct.detailProduit.categorieProduit, [
        ]),
        
  
      });
    } else {
      this.Product.setControl(
        'id',
        new FormControl(this.selectedProduct.idProduit)
      );
      this.Product.setControl(
        'prixUnitaire',
        new FormControl(this.selectedProduct.prixUnitaire)
      );
      this.Product.setControl(
        'libelle',
        new FormControl(this.selectedProduct.libelle)
      );
      this.Product.setControl(
        'code',
        new FormControl(this.selectedProduct.code)
      );
      this.Product.setControl(
        'category',
        new FormControl(this.selectedProduct.detailProduit.categorieProduit)
      );
    }
    console.log(changes);
  }

  discardUpdate() {
    this.updateProductStatus.emit(false);
  }


  getId(id){
    console.log(this.idStockProduit);
    console.log(id);
    this.ss.getStockById(id).subscribe((res) =>{
       this.idStockProduit=Number(res.idStock);
       console.log(this.idStockProduit);
    });
  }
  updateProduct() {
    this.myProduct = this.Product.getRawValue();
    this.detailProduit=new detailProduit(this.Product.get('category').value)
    this.myProduct = new Produit(
      this.Product.get('code').value,
      this.Product.get('libelle').value,
      this.Product.get('prixUnitaire').value,
  this.detailProduit,
      null
    );
    console.log(this.myProduct);
    this.ps.updateProduct(this.myProduct,this.Product.get('id').value).subscribe((res) => {
      console.log('Product updated!' + res);
      this.router.navigate(['/back/product']);
    });
  }

  ProductUpdated() {
    this.Product.setValue({
      idProduct: '',
      qteMin: '',
      libelleProduct: '',
    });
    this.updated.emit(this.myProduct);
    this.updateProductStatus.emit(false);
  }

}
