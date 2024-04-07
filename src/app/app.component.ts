import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Event {
  id: string,
  title: string,
  timestamp: Date
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttons = [
    {id: '0', title: 'start working'},
    {id: '1', title: 'finish working'},
    {id: '2', title: 'baby sleeps'},
    {id: '3', title: 'baby wakes'},
  ]

  log: Event[] = [];

  logEvent ( title: string ) {
    this.log.push({
      id: this.log.length + '',
      title,
      timestamp: new Date()
    })
  }

  addButton ( inputElement: HTMLInputElement ) {
    this.buttons.push({
      id: this.buttons.length + '',
      title: inputElement.value
    })
    inputElement.value = ''
  }
}
