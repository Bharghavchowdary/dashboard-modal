import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
  data: any;
  name = new FormControl('select');
  chartsTypes = ['Bar', 'Graph', 'Pie'];
  chartsType: any;
  constructor(private appserviceService: AppserviceService) { }

  ngOnInit() {
    this.getChartData();
  }
  getChartData(): void {
    this.data = this.appserviceService.getData();
  }

  changeChart(e) {
    this.chartsType = e.target.value;
    alert(e.target.value);
  }
}
