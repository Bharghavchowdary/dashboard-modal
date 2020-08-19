import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardModalComponent } from './app-dashboard-modal/app-dashboard-modal.component';
import { LinechartComponent } from './linechart/linechart.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard-modal' },
  { path: 'dashboard-modal', component: AppDashboardModalComponent },
  { path: 'app-linechart', component: LinechartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
