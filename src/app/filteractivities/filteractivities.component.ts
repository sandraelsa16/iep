import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-filteractivities',
  standalone: true,
  imports: [KENDO_BUTTONS,KENDO_LABELS,KENDO_DROPDOWNS],
  templateUrl: './filteractivities.component.html',
  styleUrl: './filteractivities.component.css'
})
export class FilteractivitiesComponent {
  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
}
