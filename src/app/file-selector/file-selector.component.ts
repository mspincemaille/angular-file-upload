import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent {
  @Output() onFilesHandled = new EventEmitter<any>();

  handleFiles(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files as ArrayLike<File>);
    this.onFilesHandled.emit(files)
  }
}
