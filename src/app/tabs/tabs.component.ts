import { Component } from '@angular/core';
import { LayoutModule, TabStripModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';
import { FilteractivitiesComponent } from "../filteractivities/filteractivities.component";
import { ActivitiesComponent } from "../activities/activities.component";
import { NotificationComponent } from "../notification/notification.component";


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [  FilteractivitiesComponent,ActivitiesComponent, NotificationComponent,TabStripModule,CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
    selectedTab = 'ISPO';

  tabs = [
    { title: 'ISPO', content: '' },
    { title: 'VDR', content: 'VDR Content Here' },
    { title: 'VDR Revision', content: 'VDR Revision Content' },
    { title: 'VDR Finalization', content: 'Finalization Info' },
    { title: 'OTD Trends', content: 'Trends go here' },
    { title: 'Engineering Productivity', content: 'Engineering Content' },
    { title: 'Technical Alignment', content: 'Technical Info' }
  ];

  onTabSelect(title: string): void {
    this.selectedTab = title;
  }

}
