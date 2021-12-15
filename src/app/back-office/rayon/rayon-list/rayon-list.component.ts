import { ProduitSService } from './../../../../ServicesProduct/product-s.service';
import { Produit } from './../../../../Model/Produit';
import { SearchRayon } from './../../../../Model/SearchRayon';
import { Component, OnInit } from '@angular/core';
import { Rayon } from 'src/Model/Rayon';
import { RayonService } from '../rayon.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css'],
})
export class RayonListComponent implements OnInit {
  constructor(
    private rayonService: RayonService,
    private produitService: ProduitSService,
    private toastr: ToastrService
  ) {}
  rayon_list: Rayon[];
  panelOpenState = false;
  rayonId: bigint;
  rayonToUpdate: Rayon;
  addRayonStatus = false;
  updateRayonStatus = false;
  ngOnInit(): void {
    this.getAllRayons();
  }

  toogleAddRayon() {
    this.addRayonStatus = !this.addRayonStatus;
    this.updateRayonStatus = false;
  }
  getAllRayons() {
    this.rayonService.getAllRayons().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  addRayonToList(rayon: Rayon) {
    this.rayon_list.push(rayon);
    this.getAllRayons();
  }
  getRayonById(id: bigint) {
    this.rayonId = id;
  }
  delete() {
    this.rayonService.deleteRayon(this.rayonId).subscribe((res) => {
      this.getAllRayons();
    });
  }

  CloseUpdate() {
    this.updateRayonStatus = false;
  }

  getRayonList(rayon: Rayon) {
    this.getAllRayons();
  }
  toogleUpdateRayon(rayon: Rayon) {
    this.rayonToUpdate = rayon;
    this.updateRayonStatus = true;
    this.addRayonStatus = false;
  }
  formatLabel(value: number) {
    return value + 'P';
  }
  searchRayon: SearchRayon;
  serach(p?: string, d1?: string, d2?: string, nbr?: number) {
    this.searchRayon = new SearchRayon(p, d1, d2, nbr);
    this.rayonService.search(this.searchRayon).subscribe((res) => {
      this.rayon_list = res;
    });
  }

  getRayonCreatedAtDesc() {
    this.rayonService.getRayonByCreatedDateDesc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonCreatedAtAsc() {
    this.rayonService.getRayonByCreatedDateAsc().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  getRayonUpdatedAtDesc() {
    this.rayonService.getRayonByUpdatedDateDesc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonUpdatedAtAsc() {
    this.rayonService.getRayonByUpdatedAtDateAsc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonQteDesc() {
    this.rayonService.getRayonByQteDesc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonQtetAsc() {
    this.rayonService.getRayonByQteAsc().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  getRayonLibelleDesc() {
    this.rayonService.getRayonByLibelleDesc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonLibelletAsc() {
    this.rayonService.getRayonByLibelleAsc().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  getRayonCodeDesc() {
    this.rayonService.getRayonByCodeDesc().subscribe((res) => {
      this.rayon_list = res;
    });
  }
  getRayonCodetAsc() {
    this.rayonService.getRayonByCodeAsc().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  productList: Produit[] = [];
  idRayon: bigint;
  getAllProduct(id: bigint) {
    this.produitService.getProductNotAvInRayon(id).subscribe((res) => {
      this.productList = res;
      this.idRayon = id;
      console.log(this.productList);
    });
  }

  productIdList: number[] = [];
  getProductid(id: number) {
    if (!this.productIdList.includes(id)) {
      this.productIdList.push(id);
    }
  }
  retriveProduit(i: number) {
    this.productIdList = this.productIdList.filter(function (item) {
      return item !== i;
    });
    console.log(this.productIdList);
  }

  assignProductListToRayon() {
    this.rayonService
      .assignListproductToRayon(this.idRayon, this.productIdList)
      .subscribe((res) => {
        this.rayon_list.forEach((item) => {
          this.rayonService.calculQte(item.idRayon).subscribe((res) => {
            this.getAllRayons();
          });
        });
        this.toastr.success(
          'vous avez affecter ' + this.productIdList.length + 'produit(s)',
          'Gestion Stock'
        );
      });
  }
}
