import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketCommunication {
  private socket = io('http://localhost:3000');

  constructor() { }

  getSocket() {
    return this.socket;
  }
}
