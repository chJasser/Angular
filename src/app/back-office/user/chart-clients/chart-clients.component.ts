import { UserService } from './../../../servicesUser/user.service';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-chart-clients',
  templateUrl: './chart-clients.component.html',
  styleUrls: ['./chart-clients.component.css']
})
export class ChartClientsComponent implements OnInit {

  constructor(private userService: UserService) { }
    abc: any = {Ordinaire: '', Fidele:'',Premium:''};

 

  stats : any[];
  ngOnInit(): void {

    this.userService.getClientsStats().subscribe( data => {
      this.stats = data ;
      this.abc = data;

    Chart.register(...registerables);
    const ctx = document.getElementById('myChart');
    const myChart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: ['Ordinaire', 'Fidele', 'Premium'],
            datasets: [{
                label: '# of Votes',
             data: Object.values(this.abc) ,

              backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
  );

  }

}
