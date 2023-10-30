import { Attribute, Component, Input, Optional } from '@angular/core';
import { EventService } from '../../services/event.service';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.css']
})

export class FileUploadComponent {
  files:File[] = new Array<File>();
  multiple: string | null;

  @Input() allowedFiles: Array<String> = []

  constructor(
    private evsrc: EventService, 
    private apiService: APIService,
    @Optional() @Attribute('multiple') multiple: string | null) {
      this.multiple = multiple;
    }

  ngOnInit() {
    console.log(this.allowedFiles);
    this.evsrc.deleteFileListener().subscribe(name => {
      this.deleteFile(name);
    })
  }

  setFiles(files: Array<File>) {
    this.files = [...this.files, ...files];
  }

  async uploadFiles(){
   await this.apiService.upload(this.files).subscribe(result => { console.log(result)});
  }

  deleteFile(name: String) {
    this.files = this.files.filter(file => file.name !== name);
  }



}
