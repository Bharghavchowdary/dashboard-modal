import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppDashboardModalComponent } from './app-dashboard-modal/app-dashboard-modal.component';
import { AgGridModule } from 'ag-grid-angular';
import { LinechartComponent } from './linechart/linechart.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardModalComponent,
    LinechartComponent,
    DashboardScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatSlideToggleModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
