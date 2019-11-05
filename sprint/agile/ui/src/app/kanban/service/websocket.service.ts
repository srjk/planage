import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import * as Rx from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket = io('http://localhost:3001');

  getSocket() {
    return this.socket;
  }
  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    const observable = new Observable((observer) => {
      this.socket.on('message', (data) => {
        console.log('Recieved data from web sockets');
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (productId: any) => {
        this.socket.emit('message', productId);
      }
    };

    return Rx.Subject.create(observer, observable);
  }
}
