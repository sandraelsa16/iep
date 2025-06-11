import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [FormsModule,CommonModule,KENDO_LABELS,KENDO_DROPDOWNS],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.css'
})
export class DropdownsComponent {
   public filters = [
  {
    label: 'View As',
    type: 'dropdown',
    placeholder: 'Individual (2)',
    select: 'Individual (2)',
    options: [
      { text: 'Individual (2)', value: 'Individual (2)' },
      { text: 'Group (5)', value: 'Group (5)' }
    ]
  },
  {
    label: 'Functions',
    type: 'multiselect',
    placeholder: 'ENG, TECH',
    select: ['ENG', 'TECH'],
    options: ['ENG', 'TECH', 'QA', 'ADMIN']
  },
  {
    label: 'Document Type',
    type: 'multiselect',
    placeholder: 'Internal , Step',
    select: ['Internal', 'Step'],
    options: ['Internal', 'Step', 'External', 'Report']
  },
  {
    label: 'Activity Status',
    type: 'dropdown',
    placeholder: 'Select status',
    select: 'Not Completed',
    options: [
      { text: 'Completed', value: 'Completed' },
      { text: 'Not Completed', value: 'Not Completed' }
    ]
  },
  {
    label: 'Activity Type',
    type: 'multiselect',
    placeholder: '560,510',
    select: ['560', '510'],
    options: ['560', '510', '480', '430']
  },
  {
    label: 'Finish By',
    type: 'dropdown',
    placeholder: 'Late Finish',
    select: 'Late Finish',
    options: [
      { text: 'Early Finish', value: 'Early Finish' },
      { text: 'Late Finish', value: 'Late Finish' }
    ]
  },
  {
    label: 'Date Type',
    type: 'dropdown',
    placeholder: 'Select date type',
    select: 'Business',
    options: [
      { text: 'Business', value: 'Business' },
      { text: 'Calendar', value: 'Calendar' }
    ]
  }
];
}
