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
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  public tabs = [
    { title: 'ISPO', content: 'ISPO content' },
    { title: 'VDR', content: 'VDR content' },
    { title: 'VDR Revision', content: 'Revision content' },
    { title: 'VDR Finalization', content: 'Finalization content' },
    { title: 'OTD Trends', content: 'Trends content' },
    { title: 'Engineering Productivity', content: 'Productivity content' },
    { title: 'Technical Alignment', content: 'Alignment content' }
  ];

 selectedIndex = 0;
}
