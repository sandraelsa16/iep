import { Component } from '@angular/core';
import { FilteractivitiesComponent } from "../filteractivities/filteractivities.component";
import { ActivitiesComponent } from "../activities/activities.component";

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [FilteractivitiesComponent, ActivitiesComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css'
})
export class TabContentComponent {

}
