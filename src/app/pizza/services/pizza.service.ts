import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Pizza } from '../models/pizza.model';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PizzasService extends EntityCollectionServiceBase<Pizza> {
    constructor(
        elementsFactory: EntityCollectionServiceElementsFactory,
        private http: HttpClient
    ) {
        super('Pizza', elementsFactory);
    }
}
