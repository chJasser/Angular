import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  ListProduct:Produit[];



  ngOnInit(): void {
this.ListProduct=[
  { idProduit: 1, code: 127,libelle: "PC", prixUnitaire : 2000},
  { idProduit: 2, code: 128,libelle: "TV", prixUnitaire : 1000},
  { idProduit: 3, code: 129,libelle: "Table", prixUnitaire : 200},
  { idProduit: 4, code: 130,libelle: "Table", prixUnitaire : 200},
  { idProduit: 5, code: 131,libelle: "Table", prixUnitaire : 200},
  { idProduit: 6, code: 132,libelle: "Table", prixUnitaire : 200}
  ]
  }

}
