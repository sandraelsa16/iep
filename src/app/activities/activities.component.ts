import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';


@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [ KENDO_GRID,
    KENDO_CHARTS,
    KENDO_INPUTS,
    CommonModule,
  KENDO_ICONS],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  public gridData = [
  {
    projectId: "(406) 555-0120",
    activityId: "(406) 555-0120",
    subActivity: "Rulestream",
    activityName: "6391 Elgin St. Celina, Delaware 1029...",
    resource: "Amanda Johnson",
    hasImage: true,
    earlyDate: "10-14-2024"
  },
  {
    projectId: "(239) 555-0108",
    activityId: "(239) 555-0108",
    activityName: "1901 Thornridge Cir. Shiloh, Hawaii ...",
    resource: "Robert Fox",
    hasImage: true,
    earlyDate: "10-14-2024"
  },
  {
    projectId: "(406) 555-0120",
    activityId: "(480) 555-0103",
    activityName: "4140 Parker Rd. Allentown, New Me...",
    resource: "Savannah Nguyen",
    hasImage: false,
    earlyDate: "10-14-2024"
  },
  {
    projectId: "(480) 555-0103",
    activityId: "(480) 555-0103",
    activityName: "4140 Parker Rd. Allentown, New Me...",
    resource: "Savannah Nguyen",
    hasImage: true,
    earlyDate: "10-14-2024"
  }
];

}
