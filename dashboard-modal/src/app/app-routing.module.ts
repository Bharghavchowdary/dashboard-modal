import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardModalComponent } from './app-dashboard-modal/app-dashboard-modal.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard-modal' },
  { path: 'dashboard-modal', component: AppDashboardModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
