import { Component, Input } from '@angular/core';
import { EventService } from './services/event.service';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: '<file-upload [allowedFiles]="allowedFiles" multiple></file-upload>',
  styleUrls: ['./app.component.css'],
  providers: [EventService, APIService]
})
export class AppComponent {
  @Input() allowedFiles: Array<String> = ['.pdf, .png']
}
