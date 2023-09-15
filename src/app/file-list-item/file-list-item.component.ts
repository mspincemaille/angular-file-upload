import { Component, Input } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'file-list-item',
  templateUrl: './file-list-item.component.html',
  styleUrls: ['./file-list-item.component.css']
})
export class FileListItemComponent {
  @Input() file: any = File;

  constructor(private esrvc: EventService) {}

  deleteFile(name:String) {
    this.esrvc.deleteFile(name);
  }
}
