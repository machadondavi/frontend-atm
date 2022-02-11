import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  notasSaque: number[];
}


@Component({
  selector: 'app-dialog-saque',
  templateUrl: './dialog-saque.component.html',
  styleUrls: ['./dialog-saque.component.css']
})
export class DialogSaqueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSaqueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  public selecionarImgCedula(cedula: number) {
    switch (cedula) {
      case 10: 
        return 'assets/cedulas/10.png';
      case 20:
        return 'assets/cedulas/20.png';
      case 50:
        return 'assets/cedulas/50.png';
      case 100:
        return 'assets/cedulas/100.png';
      default:
        return null;
    }
  }

  public fecharDialog() {
    this.dialogRef.close()
  }
}
