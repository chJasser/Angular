import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { Produit } from 'src/Model/Produit';
import { SearchProduit } from 'src/Model/SearchProduit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private ps:ProduitSService) { }


  @Output() libelleSearched = new EventEmitter<string>();
  
  @Output() prixselected = new EventEmitter<any>();
  @Output() salut = new EventEmitter<CategorieProduit>();


  @Output()  produitsearch = new EventEmitter<SearchProduit>();
  
  prix:any;
  categorie:any
  libelle:string
  minValue:any
  maxValue:any
  getListProduitByPrix:Produit[];
  getListProduitByCategory:Produit[];


  getProductBylibelle(libelle:string){

    this.libelleSearched.emit(this.libelle)
 
}
  getproduitsByprix(price:any){
    this.prixselected.emit(this.prix)
  }
  getMax(){
    console.log(this.maxValue)
    this.ps.getMax().subscribe(res=> this.maxValue=res.prixUnitaire)
   
  }
  getMin(){
console.log(this.minValue)
    this.ps.getMin().subscribe(res=>this.minValue=res.prixUnitaire)
  }

  getproduitsBycat(categorie:CategorieProduit){
    console.log(categorie)
    this.salut.emit(categorie);
  }


  SearchProduit1:SearchProduit;
search(p:any, d1:any, d2:any,prixUnitaire:any){
  console.log(p);
  console.log(d1);
  console.log(d2);
  console.log(prixUnitaire);
  
  this.SearchProduit1 = new SearchProduit(p, d1, d2,prixUnitaire);
  this.produitsearch.emit(this.SearchProduit1)
}



  ngOnInit(): void {
    console.log(this.prix)

    this.getMin()
    console.log(this.minValue)
    this.getMax()
    console.log(this.maxValue)
    this.prix=this.minValue
  }

value:number;

}
