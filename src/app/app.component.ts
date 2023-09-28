import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService, APIService]
})
export class AppComponent {}
