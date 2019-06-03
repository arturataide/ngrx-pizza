import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pizza } from '../models/pizza.model';


@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:9090';

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${this.url}/pizzas`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${this.url}/pizzas`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${this.url}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}