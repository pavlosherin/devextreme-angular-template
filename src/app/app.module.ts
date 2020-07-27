import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { TreeViewComponent } from './pages/tree-view/tree-view.component';
import {DxDataGridModule, DxTextBoxModule, DxTreeViewModule} from 'devextreme-angular';
import {SafeHtmlPipe} from './pages/tree-view/safe-html.pipe';
import { DataGridCellEditComponent } from './pages/data-grid-cell-edit/data-grid-cell-edit.component';
import { DataGridExcelExportComponent } from './pages/data-grid-excel-export/data-grid-excel-export.component';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    TreeViewComponent,
    DataGridCellEditComponent,
    DataGridExcelExportComponent
  ],
    imports: [
        BrowserModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        SingleCardModule,
        FooterModule,
        LoginFormModule,
        AppRoutingModule,
        DxTreeViewModule,
        DxTextBoxModule,
        DxDataGridModule
    ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
