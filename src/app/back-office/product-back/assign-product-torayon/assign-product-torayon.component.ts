import { Component, OnInit } from '@angular/core';


import { Produit } from 'src/Model/Produit';
import { Rayon } from 'src/Model/Rayon';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { RayonService } from '../../rayon/rayon.service';

@Component({
  selector: 'app-assign-product-torayon',
  templateUrl: './assign-product-torayon.component.html',
  styleUrls: ['./assign-product-torayon.component.css']
})
export class AssignProductTorayonComponent implements OnInit {
  voir:boolean=false
  rayonChoisit:string="";
  ProduitChoisit:string="";
  ListRayon:Rayon[];
  ListProduit:Produit[];
  idRayona:number=1;
  idProduit:number;

  






  constructor(private sr:RayonService,private ps:ProduitSService){}

  voirEtat(){
    if(this.rayonChoisit.length!=0 && this.ProduitChoisit.length!=0){
      this.voir=true;
    }
  }

  getAllRayons(){
    this.sr.getAllRayons().subscribe((res) => {
      this.ListRayon = res;
      console.log(this.ListRayon);
    });
  }

  getAllProduit(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduit = res;
      console.log(this.ListProduit);
    });
  }
  getIdProduit(id){
    
    console.log(id);
    this.ps.getProductById(id).subscribe((res) =>{
       this.idProduit=Number(res.idProduit);
       console.log(this.idProduit);
    });
  }

  getProduit(libelleproduit:string){
    this.ProduitChoisit=libelleproduit;
  }
  getIdRayon(id){
    
    console.log(id);
    this.sr.getRayonById(id).subscribe((res) =>{
       this.idRayona=Number(res.idRayon);
       console.log(this.idRayona);
    });
  }

  getRayon(libelleRayon:string){
    
    this.rayonChoisit=libelleRayon;
  }

  AffecterProduitRayon(idProduit:number,idRayoon:number){
console.log(idRayoon)
this.ps.assignProduitTorayon(idProduit,this.idRayona).subscribe((res)=>console.log(res.rayon))

  }


  ngOnInit(): void {
    this.getAllProduit();
    this.getAllRayons();
  }

}
