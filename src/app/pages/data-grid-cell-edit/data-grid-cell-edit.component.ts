import { Component, OnInit } from '@angular/core';
import DevExpress from 'devextreme';

@Component({
  selector: 'app-data-grid-cell-edit',
  templateUrl: './data-grid-cell-edit.component.html',
  styleUrls: ['./data-grid-cell-edit.component.scss']
})
export class DataGridCellEditComponent implements OnInit {

  columns: DevExpress.ui.dxDataGridColumn[];
  dataSource: any[];

  constructor() {
    this.columns = [
      {
        allowEditing: false,
        cssClass: 'disabled',
        caption: 'E-mail',
        dataField: 'email',
        dataType: 'string'
      },
      {
        allowEditing: true,
        caption: 'First name',
        dataField: 'firstName',
        dataType: 'string'
      },
      {
        allowEditing: true,
        caption: 'Last name',
        dataField: 'lastName',
        dataType: 'string'
      },
      {
        allowEditing: false,
        cssClass: 'disabled',
        caption: 'Date registered',
        dataField: 'registrationDate',
        dataType: 'datetime'
      }
    ];

    this.dataSource = [
      {email: 'example-email-1@test.tst', firstName: 'Example 1', lastName: 'Name 9', registrationDate: '2020-01-01 15:12'},
      {email: 'example-email-2@test.tst', firstName: 'Example 2', lastName: 'Name 8', registrationDate: '2020-01-12 15:12'},
      {email: 'example-email-3@test.tst', firstName: 'Example 3', lastName: 'Name 7', registrationDate: '2020-05-01 15:12'},
      {email: 'example-email-4@test.tst', firstName: 'Example 4', lastName: 'Name 6', registrationDate: '2020-03-02 15:12'},
      {email: 'example-email-5@test.tst', firstName: 'Example 5', lastName: 'Name 5', registrationDate: '2020-07-01 15:12'},
      {email: 'example-email-6@test.tst', firstName: 'Example 6', lastName: 'Name 4', registrationDate: '2020-01-05 15:12'},
      {email: 'example-email-7@test.tst', firstName: 'Example 7', lastName: 'Name 3', registrationDate: '2020-10-28 15:12'},
      {email: 'example-email-8@test.tst', firstName: 'Example 8', lastName: 'Name 2', registrationDate: '2020-02-07 15:12'},
      {email: 'example-email-9@test.tst', firstName: 'Example 9', lastName: 'Name 1', registrationDate: '2020-02-14 15:12'}
    ];
  }

  ngOnInit() {
  }
}
