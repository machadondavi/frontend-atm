import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaqueService } from 'src/app/services/saque.service';
import Swal from 'sweetalert2';
import { DialogSaqueComponent } from './dialog-saque/dialog-saque/dialog-saque.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public valorSaque: string = '';

  public notasSaque: number[] = [];

  constructor(private saqueService: SaqueService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public realizarSaque() {
    const valorSaque = new Number(this.valorSaque);
    this.valorSaque = '';
    this.saqueService.realizarSaque(valorSaque).subscribe(res => {
      this.notasSaque = res;
      Swal.fire({
        icon: 'success',
        title: 'Saque realizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        this.openDialogSaque(this.notasSaque);
      }, 1600);
      
    }, error => {
      Swal.fire({
        icon: 'warning',
        title: 'Não foi possível realizar seu saque',
        text: 'Não temos cédulas disponíves para o valor solicitado. Cédulas disponíveis: 10, 20, 50 e 100',
        showConfirmButton: true
      });

      this.valorSaque = '';
      this.notasSaque = [];
    });
  }

  public openDialogSaque(notasSaque: number[]) {
    const dialogRef = this.dialog.open(DialogSaqueComponent, {
      width: '700px',
      data: { notasSaque: notasSaque }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.valorSaque = '';
      this.notasSaque = [];
    });
  }

  public adicionarValorPorBtn(number: number) {
    this.valorSaque = this.valorSaque + number;
  }

  public limparValorSaque() {
    this.valorSaque = '';
    this.notasSaque = [];
  }

  public popUpCedulasDisponiveis() {
    Swal.fire({
      icon: 'info',
      title: 'Cédulas disponíveis',
      text: 'Notas disponíveis para saque: 10, 20, 50 e 100',
      showConfirmButton: true
    })
  }
}
