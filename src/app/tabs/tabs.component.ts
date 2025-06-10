import { Component } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TabContentComponent } from "../tab-content/tab-content.component";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [LayoutModule, TabContentComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
