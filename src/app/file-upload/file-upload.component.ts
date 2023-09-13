import { Component } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  files:File[] = new Array<File>();;

  setFiles(files: Array<File>): void {
    this.files = [...this.files, ...files];
  }
}
