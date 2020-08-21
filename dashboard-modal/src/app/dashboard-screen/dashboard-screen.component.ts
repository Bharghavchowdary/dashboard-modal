import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl } from '@angular/forms';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataSet, ColumnDefs } from '../data'


@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
  gridData: any[] = [];
  name = new FormControl('select');
  chartsTypes = ['bar', 'radar', 'pie', 'line'];
  chartsType: any;
  Label = [];
  Data = [];
  isToggle: boolean = false;
  columnDefs: ColumnDefs[] = [];
  chartData: ChartDataSets[] = [];
  datasets: any[] = [];
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
  chartLabels: Label[] = [];
  chartColors: Color[] = [
    {
      borderColor: 'rgb(179, 255, 255)',
      backgroundColor: 'rgba(179, 255, 255,0.1)',
    },
    {
      borderColor: 'rgb(255, 153, 255)',
      backgroundColor: 'rgba(255, 153, 255,0.1)',
    },
  ];
  chartLegend = true;
  chartType = 'line';
  constructor(private appserviceService: AppserviceService) { }

  ngOnInit() {
    this.getChartData();
    this.chartData = this.datasets;
    this.chartLabels = this.Label;
  }
  getChartData(): void {
    let chartInfo = this.appserviceService.getChartDataSets();
    let chartdatasets = chartInfo.chartDataSets;
    chartdatasets.forEach(i => this.addDatasets(i));
    //this.data.forEach(i => this.addDatasets(i));
  }

  addDatasets(dataSetarr) {
    let chartData = [];
    //Adding Coloum defs for grid view
    if (Object.keys(dataSetarr.prodData[0]).length > 0 && !(this.columnDefs.length > 0)) {
      Object.keys(dataSetarr.prodData[0]).forEach(i => {
        this.columnDefs.push(new ColumnDefs(i));
      })
    }
    // Adding label and data to chart
    dataSetarr.prodData.forEach(i => {
      chartData.push(Object.values(i)[1]);
      this.Label.push(Object.values(i)[0]);
      this.gridData.push(i);
    });
    //Passing multiple datasaets to charts
    this.datasets.push(new DataSet(chartData, dataSetarr.prodName));
    //Taking distinct labels on x-axis
    this.Label = [...new Set(this.Label)];

  }
  onValChange() {
    this.isToggle = !this.isToggle;
  }
  onChangeChart(e) {
    this.chartsType = e.target.value;
    this.chartType = this.chartsType;
    this.chartLabels = this.Label;
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
        alert(clickedElementIndex + '\n' + label + '\n' + value);
      }
    }
  }
}
