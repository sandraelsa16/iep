import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Sidebar1Component } from "../sidebar1/sidebar1.component";
import { TabsComponent } from "../tabs/tabs.component";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, TabsComponent, CommonModule, Sidebar1Component, SidebarComponent],
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
