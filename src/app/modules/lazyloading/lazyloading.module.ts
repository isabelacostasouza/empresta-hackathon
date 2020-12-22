import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LazyloadingComponent } from './lazyloading.component';
import { HomeComponent } from '../../pages/home/home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { ControllerInterfaceComponent } from '../../pages/controller-interface/controller-interface.component';
import { ClientsTableComponent } from '../../components/clients-table/clients-table.component';
import { IntroComponent } from '../../components/intro/intro.component';

@NgModule({
  declarations: [
    LazyloadingComponent,
    HomeComponent,
    ControllerInterfaceComponent,
    ClientsTableComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [HttpClient],
  bootstrap: [LazyloadingComponent]
})
export class LazyloadingModule { }
