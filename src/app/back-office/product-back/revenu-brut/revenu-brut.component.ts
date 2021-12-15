import { Component, OnInit } from '@angular/core';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-revenu-brut',
  templateUrl: './revenu-brut.component.html',
  styleUrls: ['./revenu-brut.component.css']
})
export class RevenuBrutComponent implements OnInit {
revenu:any;
yourModelDate:any;
  constructor(private ps:ProduitSService) { }

  ngOnInit(): void {
  }

  getRevenuBrut(d1:string,d2:string){

    this.ps.getRevenuBrut(18,d1,d2).subscribe((res)=>{this.revenu=res;
     console.log(this.revenu);})
   }

}
