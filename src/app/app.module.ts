import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SideBarMenuComponent} from './side-bar-menu/side-bar-menu.component';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { MainContentComponent } from './main-content/main-content.component'

@NgModule({
  declarations: [
    AppComponent,
    SideBarMenuComponent,
    ToolbarMenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
