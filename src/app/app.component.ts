import { Component, ViewChild } from '@angular/core';
import { DialogAnchorDirective } from './directives/dialog-anchor.directive';
import { DialogComponent } from './dialog/dialog.component';
import { DialogData } from './dialog/dialog-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  @ViewChild(DialogAnchorDirective) dialogAnchor: DialogAnchorDirective;
  
  openDialogBox() {
    const data: DialogData = {
      message: 'This will overwrite the default dialog box message',
      title: 'Updated title'
    };
    this.dialogAnchor.createDialog(DialogComponent, data);
  }
}
