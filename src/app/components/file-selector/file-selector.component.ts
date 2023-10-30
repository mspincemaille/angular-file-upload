import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent {
  @Output() onHandleFiles = new EventEmitter<any>();
  @Output() onHandleSubmit = new EventEmitter<any>();

  @Input() multiple: string | null = null;
  @Input() allowedFiles: Array<String> = [];

  accept: string = '';

  handleFiles(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files as ArrayLike<File>);
    this.onHandleFiles.emit(files)
  }

  setAcceptFiles(extensions: Array<String>) {
    return extensions.map(ext => { })
  }

  handleSubmit() {
    this.onHandleSubmit.emit();
  }
}
