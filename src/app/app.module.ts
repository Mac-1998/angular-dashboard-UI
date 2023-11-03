import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopCardsComponent } from './components/dashboard/top-cards/top-cards.component';
import { RecentOrdersComponent } from './components/dashboard/recent-orders/recent-orders.component';
import { NewUsersComponent } from './components/dashboard/new-users/new-users.component';
import { BottomGraphsComponent } from './components/dashboard/bottom-graphs/bottom-graphs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AreaChartComponent } from './components/dashboard/bottom-graphs/area-chart/area-chart.component';
import { DonutChartComponent } from './components/dashboard/bottom-graphs/donut-chart/donut-chart.component';
import { ColumnChartComponent } from './components/dashboard/bottom-graphs/column-chart/column-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopCardsComponent,
    RecentOrdersComponent,
    NewUsersComponent,
    BottomGraphsComponent,
    SidebarComponent,
    HeaderComponent,
    AreaChartComponent,
    DonutChartComponent,
    ColumnChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
