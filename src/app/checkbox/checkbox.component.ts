import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_TREEVIEW } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [KENDO_TREEVIEW,KENDO_TEXTBOX,KENDO_LAYOUT,KENDO_BUTTONS,CommonModule,FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
   public currentProjects: any[] = [
  {
    id: 1,
    text: "1104096–NCIC III Ammonia/Urea Plant – STCC – Compression",
    isFavorite: true,
    checked: true
  },
  {
    id: 2,
    text: "1104088–Ar Ratawi",
    expanded: true,
    checked: true,
    items: [
      {
        id: 3,
        text: "HCC - Train #2 & 3 without string test",
        checked: true
      },
      {
        id: 4,
        text: "HCC - Train #1 with string test +...",
        checked: false,
        items: []
      },
      {
        id: 5,
        text: "Other",
        expanded: true,
        checked: true,
        items: [
          { id: 6, text: "1114057", checked: true },
          { id: 7, text: "1114057", checked: true },
          { id: 8, text: "1114057", checked: true }
        ]
      }
    ]
  },
  {
    id: 9,
    text: "9000133–Leviathan Tex",
    isFavorite: true,
    checked: true
  },
  {
    id: 10,
    text: "1709043–Garraf",
    checked: true
  },
  {
    id: 11,
    text: "1104057–BP UCC HCC Package",
    checked: true
  },
  {
    id: 12,
    text: "1800475–ASAB Lifting Project #2"
  },
  {
    id: 13,
    text: "1800475–GTFT - GTCC - LP Booster c..."
  },
  {
    id: 14,
    text: "1105461–Cepsa HVO Unit Verde Pro..."
  },
  {
    id: 15,
    text: "0506193–Venture Global CP2 Phase ..."
  },
  {
    id: 16,
    text: "5840737-P-70 4HE replacement"
  },
  {
    id: 17,
    text: "1103995–Pluto 1 Upgrade LGBC"
  },
  {
    id: 18,
    text: "1900976–Perdaman: Syngas and Ammonia"
  },
  {
    id: 19,
    text: "1900934–Perdaman:  Ammonia"
  },
  {
    id: 20,
    text: "1902445–Perdaman:  Ammonia"
  },
  {
    id: 21,
    text: "190525–Perdaman testing"
  }
];
public expandedKeys: any[] = [2, 5];
public checkedKeys: any[] = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
searchText: string = '';

get filteredProjects() {
  if (!this.searchText) {
    return this.currentProjects;
  }
  return this.currentProjects.filter(project =>
    project.text.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

public showSidebar:any=true;

toggleSidebar(){
  this.showSidebar = !this.showSidebar
}


}
