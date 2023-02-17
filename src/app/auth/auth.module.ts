import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthRoutingModule } from './auth-routing.modules';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [AuthGuard],
})
export class AuthModule {}
