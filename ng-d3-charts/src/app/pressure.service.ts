import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, from } from 'rxjs';
import * as socketio from 'socket.io-client';
import { PressureData } from './pressure-data';

@Injectable({
  providedIn: 'root'
})

export class PressureService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getInitialPressure(): Observable<PressureData[]>  {
    return this.http.get<PressureData[]>(`${this.baseUrl}/api/pressure`);

    }
  getUpdates() {
    const socket = socketio(this.baseUrl, { transports: ['websocket'] });
    const pressureSub = new Subject<PressureData>();
    const pressureSubObservable = from(pressureSub);

    socket.on('pressure', (pressure: PressureData) => {
      pressureSub.next(pressure);
    });

    return pressureSubObservable;
  }
}
