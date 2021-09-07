import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CopyrightBarComponent } from './copyrightBar/copyright-bar.component';
import { CopyrightStatementComponent } from './copyrightBar2/copyright-statement.component';
import { BottomNavBarComponent } from './footer1/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CopyrightBarComponent,
    CopyrightStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
