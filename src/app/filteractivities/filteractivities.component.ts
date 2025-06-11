import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { DropdownsComponent } from "../dropdowns/dropdowns.component";

@Component({
  selector: 'app-filteractivities',
  standalone: true,
  imports: [KENDO_BUTTONS, KENDO_LABELS, KENDO_DROPDOWNS, CommonModule, FormsModule, DropdownsComponent],
  templateUrl: './filteractivities.component.html',
  styleUrl: './filteractivities.component.css'
})
export class FilteractivitiesComponent {
 
  selectedButton: string = 'Total Documents(1321)';

  docButtons = [
    { value: 'Total Documents(1321)' },
    { value: 'Backlogs(16)' },
    { value: 'Forecast(199)' },
    { value: 'Not Acknowledged(3)' },
    { value: 'Step(5)' },
    { value: 'Rule Stream(3)' }
  ];

  onSelect(value: string): void {
    this.selectedButton = value;
  }
}

