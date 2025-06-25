import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_TREEVIEW } from '@progress/kendo-angular-treeview';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { DrawerItem, DrawerSelectEvent } from "@progress/kendo-angular-layout";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LayoutModule, FormsModule, KENDO_BUTTONS, KENDO_TREEVIEW, KENDO_TEXTBOX, CheckboxComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {


  public selected = "Inbox";

  public drawerExpanded = false;


  public items: Array<any> = [
    
    { icon: " device_hub" },
    { separator: true },
    { icon: "apps", selected: true },
    { icon: "folder_managed" },
    { icon: "folder" },
    { icon: "verified" },
    { icon: "engineering" },
    { icon: "settings" }
  ];

  showAppChecklist: boolean = true;
  public toggleDrawer(): void {
    this.drawerExpanded = !this.drawerExpanded;
    this.showAppChecklist = !this.showAppChecklist;
  }


  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    if (ev.item.icon && ev.item.icon.trim() === 'device_hub') {
    this.showAppChecklist = !this.showAppChecklist; 
  } 
  else{
    this.showAppChecklist = true;
  }
  }



}


