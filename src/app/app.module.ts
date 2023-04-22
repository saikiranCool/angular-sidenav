import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {SidenavFixedExample} from './sidenav-fixed-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from 'src/app-routing.module';
import { Home } from './home/home.component';
import { MainComponent } from './main-content/main-content.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidenavFixedExample,
                 Home,
                 MainComponent,
                AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
