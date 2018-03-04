import { Component, EventEmitter } from '@angular/core';
import { DialogData } from './dialog-data';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  
  close = new EventEmitter();
  data: DialogData = {
    message: 'Dialog Box message' ,
    title: 'Dialog Box Title'
  };
  
  
  onExitClick() {
    this.close.emit('event');
  }
  
}
