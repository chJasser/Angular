import { Rayon } from 'src/Model/Rayon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RayonService } from '../rayon.service';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-rayon-detail',
  templateUrl: './rayon-detail.component.html',
  styleUrls: ['./rayon-detail.component.css']
})
export class RayonDetailComponent implements OnInit {
  constructor(private ac: ActivatedRoute, private rayonService: RayonService) {
  /*   monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend(); */
  }
  rayon: Rayon;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (next) =>
        this.rayonService
          .getRayonById(Number(next.get('id')))
          .subscribe((res) => {
            this.rayon = res;

          }),
      (error) => console.log(error)
    );
  }







}
