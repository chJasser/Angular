import { Component, OnInit } from '@angular/core';
import { Rayon } from 'src/Model/Rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css'],
})
export class RayonListComponent implements OnInit {
  constructor(private rayonService: RayonService) {}
  rayon_list: Rayon[];
  ngOnInit(): void {
    this.getAllRayons();
  }
  getAllRayons() {
    this.rayonService.getAllRayons().subscribe((res) => {
      this.rayon_list = res;
      console.log(this.rayon_list);
    });
  }
}
