import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  files:File[] = new Array<File>();

  constructor(private evsrc: EventService) {}

  ngOnInit() {
    this.evsrc.deleteFileListener().subscribe(name => {
      this.deleteFile(name);
    })
  }

  setFiles(files: Array<File>) {
    this.files = [...this.files, ...files];
  }

  deleteFile(name: String) {
    this.files = this.files.filter(file => file.name !== name);
  }


}
