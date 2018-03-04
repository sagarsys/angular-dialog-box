import { ComponentFactoryResolver, ComponentRef, Directive, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogData } from '../dialog/dialog-data';

@Directive({
  selector: '[appDialogAnchor]'
})
export class DialogAnchorDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  
  createDialog(dialogComponent: { new(): DialogComponent }, data: DialogData = null): ComponentRef<DialogComponent> {
    // remove any open dialogs
    this.viewContainerRef.clear();
    // resolve and create component
    const dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
    const dialogComponentRef = this.viewContainerRef.createComponent(dialogComponentFactory);
    // add supplied data to dialog if any
    if (data) {
      dialogComponentRef.instance.data = Object.assign({}, dialogComponentRef.instance.data, data);
    }
    // event listener for close event
    dialogComponentRef.instance.close.subscribe(() => {
      dialogComponentRef.destroy();
    });
    // return dialog ref
    return dialogComponentRef;
  }

}
