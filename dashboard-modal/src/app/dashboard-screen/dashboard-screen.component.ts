import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl } from '@angular/forms';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
  data: any;
  name = new FormControl('select');
  chartsTypes = ['bar', 'radar', 'pie', 'line'];
  chartsType: any;
  Label = [];
  Data = [];
  isToggle: boolean = false;
  columnDefs = [
    { field: 'Time', filter: 'agTextColumnFilter' },
    { field: 'Temperature', filter: 'agTextColumnFilter' }
  ];
  chartData: ChartDataSets[] = [
    {
      data: this.Data,
      lineTension: 0,
      borderWidth: 2,
      pointRadius: 2,
      pointBackgroundColor: 'white',
      cubicInterpolationMode: 'monotone'
    }
  ];

  chartOptions: ChartOptions = {
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
  chartLabels: Label[] = this.Label;
  chartColors: Color[] = [
    {
      borderColor: 'rgb(255, 153, 255)',
      backgroundColor: 'rgba(255, 153, 255,0.1)',
    }
  ];
  chartLegend = true;
  chartType = 'line';
  constructor(private appserviceService: AppserviceService) { }

  ngOnInit() {
    this.getChartData();
  }
  getChartData(): void {
    this.data = this.appserviceService.getData();
    this.data.forEach(i => {
      this.Data.push(i.Temperature);
      this.Label.push(i.Time);
    });
  }
  onValChange() {
    this.isToggle = !this.isToggle;
  }
  onChangeChart(e) {
    this.chartsType = e.target.value;
    this.chartType = this.chartsType;
    this.chartLabels = this.Label;
    this.chartData.forEach(item => {
      item.data = this.Data
    });
  }
  onChartClick(e) {
    //Below code works for piechart
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        alert(clickedElementIndex+ '\n' +label + '\n' + value);
      }
    }
  }
}
