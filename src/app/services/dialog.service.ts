import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {ErrorDialogComponent} from "../shared/error-dialog/error-dialog.component";


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      // width: '400px',
      // height: '150px',
      data: {
        message: msg
      }
    });
  }

  openErrorDialog(msg: string) {
    return this.dialog.open(ErrorDialogComponent, {
      data: {
        message: msg
      }
    });
  }

}
