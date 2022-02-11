import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {

  private apiUrl = environment.API_URL;

  constructor(private router: Router, private http: HttpClient) { }

  public realizarSaque(valorSaque: Number): Observable<Array<number>> {
    return this.http.get<Array<number>>(`${this.apiUrl}saque?valorSaque=${valorSaque}`);
  }
}
