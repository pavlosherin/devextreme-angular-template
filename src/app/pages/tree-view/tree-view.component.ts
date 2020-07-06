import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

  dataSource: any[];
  searchValue: string;

  constructor() {
    this.dataSource = [
      {
        text: 'First',
        items: [
          {
            text: 'First - first'
          },
          {
            text: 'First - second'
          },
          {
            text: 'First - third'
          }
        ]
      },
      {
        text: 'Second'
      },
      {
        text: 'Third',
        items: [
          {
            text: 'Third - first'
          },
          {
            text: 'Third - second'
          },
          {
            text: 'Third - third'
          }
        ]
      },
      {
        text: 'Fourth'
      }
    ];
  }

  onItemClicked(e: any) {
    notify({
      message: `${e.itemData.text} clicked`,
      position: 'top center'
    }, 'success');
  }

  highlight(value: string, searchedValue: string): string {
    if (!searchedValue) { return value; }
    return value.replace(new RegExp(searchedValue, 'gi'), match => {
      return `<span class="highlight-text dx-template-wrapper">${match}</span>`;
    });
  }
}
