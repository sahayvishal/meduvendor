import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditBusinessModalComponent } from './edit-business-modal/edit-business-modal.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, EditBusinessModalComponent, AddComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
