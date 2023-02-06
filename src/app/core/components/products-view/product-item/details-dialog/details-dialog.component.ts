import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from 'src/app/core/shared/product/product';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
})
export class DetailsDialogComponent {

  @Input() itemData: any;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogInfo, {
      data: {
        ...this.itemData
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-info.component.html',
})
export class DialogInfo {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}
}
