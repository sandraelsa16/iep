import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_TREEVIEW } from '@progress/kendo-angular-treeview';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { DrawerItem, DrawerSelectEvent } from "@progress/kendo-angular-layout";
import {
  SVGIcon,
  bellIcon,
  calendarIcon,
  envelopeLinkIcon,
  inboxIcon,
  menuIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LayoutModule, FormsModule, KENDO_BUTTONS, KENDO_TREEVIEW, KENDO_TEXTBOX, CheckboxComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {


  public selected = "Inbox";
  public menuSvg: SVGIcon = menuIcon;

  public items: Array<DrawerItem> = [
    { text: "Inbox", svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: "Notifications", svgIcon: bellIcon },
    { text: "Calendar", svgIcon: calendarIcon },
    { separator: true },
    { text: "Attachments", svgIcon: envelopeLinkIcon },
    { text: "Favourites", svgIcon: starOutlineIcon },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }


  
}


