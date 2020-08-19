import { Component, OnInit } from '@angular/core';  
import * as Chart from 'chart.js';

@Component({  
  selector: 'app-linechart',  
  templateUrl: './linechart.component.html',  
  styleUrls: ['./linechart.component.scss']  
})  
export class LinechartComponent implements OnInit {   
  
  Time = [];
  Temperature = []; 
  isToggle: boolean = false;  
  ngOnInit() {  
    this.data.forEach(i => {
      this.Temperature.push(i.Temperature);
      this.Time.push(i.Time);
    });
    let myChart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: this.Time,
          datasets: [{
              label: 'Temperature',
              data: this.Temperature,
              backgroundColor: [
                'rgba(255, 153, 255,0.1)'                
              ],
              borderColor:['rgb(255, 153, 255)'],
              borderWidth: 1
          }]
          
      },      
      options: {
        responsive: false,
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
        },
        
      }
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

  onValChange() {
    this.isToggle = !this.isToggle;
  }
}