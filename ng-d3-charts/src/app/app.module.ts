import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PressureService } from './pressure.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PressureChartComponent } from './components/pressure-chart/pressure-chart.component';
import { Router, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: PressureChartComponent,
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    PressureChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [PressureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
