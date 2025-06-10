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
  KENDO_ICONS],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

}
