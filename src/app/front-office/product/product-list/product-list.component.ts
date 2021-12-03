import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RayonService } from 'src/app/back-office/rayon/rayon.service';
import { StockService } from 'src/app/back-office/stock/stock.service';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { Produit } from 'src/Model/Produit';
import { Rayon } from 'src/Model/Rayon';
import { Stock } from 'src/Model/Stock';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private rs:RayonService,private ss:StockService,private ps:ProduitSService,private router:Router,private route:ActivatedRoute) { }
  ListProduct:Produit[];
  idProduittt:number;
  prixUnitaire:number;
  libelle:string;
  code:string;
  rayon:Rayon;
  stock:Stock;
  Category:CategorieProduit;

  @Output() prod= new EventEmitter<number>();
   k:number=0;
   idP:number;
p:Produit

getid(id:number){
  console.log(id)
this.idProduittt=id;
console.log(this.idProduittt)
this.ps.getProductById(id).subscribe(res=> this.p=res);
  this.prixUnitaire=this.p.prixUnitaire;
  console.log(this.prixUnitaire)
this.code=this.p.code;
this.libelle=this.p.libelle;
this.code=this.p.code;
this.rayon=this.p.rayon;
this.stock=this.p.stock;
this.Category=this.p.detailProduit.categorieProduit;
}

/*   this.route.queryParams.subscribe((params:any)=> {
    this.
  })}
  */

   getProduit(id:any){
    console.log(id)
    this.idProduittt=id

    
    console.log(this.idProduittt)
   }
  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
    });
  }

  getProductBylibelle(libelle:string){
    this.ps.getProductBylibelle(libelle).subscribe(res=> this.ListProduct=res);
    this.k=this.k+1;
    this.router.navigate(['/home/product']);

  }

  getproduitsByprix(price:number){
    this.ps.getProductByprixbetween(price).subscribe(res=> this.ListProduct=res);
  }

  getproduitsBycat(categorie:CategorieProduit){
    console.log(categorie)
    this.ps.getProductByCategory(categorie).subscribe(res=> this.ListProduct=res);
    console.log(this.ListProduct)
  }


  ngOnInit(): void {
if(this.k==0){
this.getAllproduits();
}

  }

}
