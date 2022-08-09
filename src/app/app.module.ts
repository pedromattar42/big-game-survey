
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { RecordsComponent } from './views/records/records.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatIconModule} from '@angular/material/icon'

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GraficosComponent } from './components/graficos/graficos.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Chart } from 'chart.js';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './views/tabela/tabela.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import { ComponentsInterceptor } from './components.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecordsComponent,
    GraficosComponent,
    TabelaComponent,
    LoadingComponent

  ],
  exports:[
    AppComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecordsComponent,
    GraficosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    NgxChartsModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ComponentsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent, Chart]
})
export class AppModule { }
