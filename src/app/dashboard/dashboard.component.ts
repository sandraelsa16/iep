import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TabsComponent } from "../tabs/tabs.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, TabsComponent, CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  scheduler:Date = new Date();

 formatDate: string = 
    this.scheduler.getDate() + ' ' +
    this.scheduler.toLocaleString('default', { month: 'short' }) + ' ' +
    this.scheduler.getFullYear();

}
