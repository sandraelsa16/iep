import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-sidebar1',
  standalone: true,
  imports: [
 
    FormsModule,
    TreeViewModule,
    ButtonsModule,
    InputsModule
  ],
  templateUrl: './sidebar1.component.html',
  styleUrl: './sidebar1.component.css'
})
export class Sidebar1Component {
  searchTerm = '';
  checkedKeys: any[] = [];

  contractData = [
    {
      text: 'Current Projects',
      children: [
        {
          text: '1104096 - NCIC III Ammonia/...'
        },
        {
          text: '1104088 - Ar Ratowai',
          children: [
            {
              text: 'HCC - Train #2 & 3 without string...',
              children: [
                { text: 'Other' },
                { text: '1114057' },
                { text: '1114057' },
                { text: '1114057' }
              ]
            },
            {
              text: 'HCC - Train #1 with string test...'
            }
          ]
        },
        { text: '9000133 - Leviathan Tex' },
        { text: '1709043 - Garraf' },
        { text: '1104057 - BP UCC HCC Package' },
        { text: '1104043 - SAB Lifting Project #2' },
        { text: '1800475 - GTFT - GTCC - LP Booster C...' },
        { text: '1105461 - Cepsa HVO Unit Verde Pro...' },
        { text: '0506193 - Venture Global CP2 Phase ...' },
        { text: '5840737 - p70 4HE replacement' },
        { text: '1103995 - Pluto 1 Upgrade LGBC' },
        { text: '1900976 - Perdaman: Syngas and Amm...' }
      ]
    }
  ];

  hasChildren = (item: any): boolean => {
    return item.children && item.children.length > 0;
  };
}
