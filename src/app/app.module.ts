import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuDialogComponent } from './header/menu-dialog/menu-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MobileBgComponent } from './mobile-bg/mobile-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuDialogComponent,
    MobileBgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
