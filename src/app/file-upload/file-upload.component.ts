import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { APIService } from '../services/api.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  files:File[] = new Array<File>();

  constructor(private evsrc: EventService, private apiService: APIService) {}

  ngOnInit() {
    this.evsrc.deleteFileListener().subscribe(name => {
      this.deleteFile(name);
    })
  }

  setFiles(files: Array<File>) {
    this.files = [...this.files, ...files];
  }

  async uploadFiles(){
  console.log('upload')
   await this.apiService.upload(this.files).subscribe(result => { console.log(result)});
  }

  deleteFile(name: String) {
    this.files = this.files.filter(file => file.name !== name);
  }



}
