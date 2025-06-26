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
    type: 'dropdown',
    placeholder: 'ENG,TECH',
    select: 'ENG,TECH',
    options: [
      { text: 'ENG,TECH', value: 'ENG,TECH' },
      { text: 'PROJECT', value: 'PROJECT' }
    ]
  },
  {
    label: 'Document Type',
    type: 'dropdown',
    placeholder: 'Internal,Step',
    select: 'Internal,Step',
    options: [
      { text: 'Internal,Step', value: 'Internal,Step' },
      { text: 'External', value: 'External' }
    ]
  },
  {
    label: 'Activity Status',
    type: 'dropdown',
    placeholder: 'Not Completed',
    select: 'Not Completed',
    options: [
      { text: 'Completed', value: 'Completed' },
      { text: 'Not Completed', value: 'Not Completed' }
    ]
  },
  {
    label: 'Activity Type',
    type: 'dropdown',
    placeholder: '560,561',
    select: '560,561',
    options: [
      { text: '560,561', value: '560,561' },
      { text: '568,555', value: '568,555' }
    ]
  },
  {
    label: 'Finish By',
    type: 'dropdown',
    placeholder: 'Late Finish',
    select: 'Late Finish',
    options: [
      { text: 'Late Finish', value: 'Late Finish' },
      { text: 'Early Finish', value: 'Early Finish' }
    ]
  },
  {
    label: 'Date Type',
    type: 'dropdown',
    placeholder: 'Business',
    select: 'Business',
    options: [
      { text: 'Business', value: 'Business' },
      { text: 'Project', value: 'Project' }
    ]
  }
  
];
}
