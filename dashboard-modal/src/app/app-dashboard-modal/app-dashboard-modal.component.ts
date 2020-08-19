import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-app-dashboard-modal',
  templateUrl: './app-dashboard-modal.component.html',
  styleUrls: ['./app-dashboard-modal.component.scss']
})
export class AppDashboardModalComponent implements OnInit {

  Time = [];
  Temperature = [];
  isToggle: boolean = true;
  constructor() { }
  ngOnInit() {
    this.data.forEach(i => {
      this.Temperature.push(i.Temperature);
      this.Time.push(i.Time);
    });
  }
  data = [
    { Time: '01', Temperature: 50 },
    { Time: '02', Temperature: 55 },
    { Time: '03', Temperature: 60 },
    { Time: '04', Temperature: 65 },
    { Time: '05', Temperature: 50 },
    { Time: '06', Temperature: 55 },
    { Time: '07', Temperature: 40 },
  ];
  columnDefs = [
    { field: 'Time' },
    { field: 'Temperature' }
  ];
  lineChartData: ChartDataSets[] = [
    {
      data: this.Temperature, label: 'Temperature', lineTension: 0, borderWidth: 2,
      pointRadius: 2,
      pointBackgroundColor: 'white',
      cubicInterpolationMode: 'monotone'
    }
  ];

  lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#000080",
      },
      align: "start"
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
        }
      },
      ]
    }
  };
  lineChartLabels: Label[] = this.Time;
  lineChartColors: Color[] = [
    {
      borderColor: 'rgb(255, 153, 255)',
      backgroundColor: 'rgba(255, 153, 255,0.1)',
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  onValChange() {
    this.isToggle = !this.isToggle;
  }

}
