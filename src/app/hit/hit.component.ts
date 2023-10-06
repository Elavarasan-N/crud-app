import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent {

  constructor(
    public _dialogRef: MatDialogRef<HitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onConfirmClick(): void {
    this._dialogRef.close('confirm');
  }

  onCancelClick(): void {
    this._dialogRef.close('cancel');
  }

}
