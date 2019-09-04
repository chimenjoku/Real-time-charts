import { Component } from '@angular/core';
import { PressureService } from './pressure.service';
import { Observable } from 'rxjs';
import { PressureData } from './pressure-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  pressure: PressureData[];
  pressureToPlot: PressureData[];

  set Pressure(status: PressureData[]) {
    this.pressure = status;
    this.pressureToPlot = this.pressure.slice(0, 20);
  }

  constructor(private pressureSvc: PressureService) {

    this.pressureSvc.getInitialPressure()
      .subscribe(points => {
        this.Pressure = points;

        const pressureUpdateObservable = this.pressureSvc.getUpdates();  // 1
        pressureUpdateObservable.subscribe((latestData: PressureData) => {  // 2
          this.Pressure = [latestData].concat(this.pressure);  // 3
    });  // 4
  });
  }
}
