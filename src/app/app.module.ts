import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { TreeViewComponent } from './pages/tree-view/tree-view.component';
import {DxTextBoxModule, DxTreeViewModule} from 'devextreme-angular';
import {SafeHtmlPipe} from './pages/tree-view/safe-html.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    TreeViewComponent
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
    DxTextBoxModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
