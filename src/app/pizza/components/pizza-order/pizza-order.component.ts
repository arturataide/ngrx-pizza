import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions/pizza.actions';
import * as fromPizza from '../../store/reducers/pizza.reducer';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import * as fromSelectors from '../../store/selectors/pizza.selectors';

@Component({
    selector: 'pizza-order',
    templateUrl: './pizza-order.component.html',
    styleUrls: ['./pizza-order.component.scss'],
})
export class PizzaOrderComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;

    constructor(private store: Store<fromPizza.PizzaState>) {}

    ngOnInit() {
        this.store.dispatch(new actions.LoadPizzas());
        this.pizzas$ = this.store.select(fromSelectors.getAllPizzas);
    }

    createPizza() {
        const pizza: Pizza = {
            id: new Date().getUTCMilliseconds().toString(),
            size: 'small',
            name: 'New Pizza',
        };

        this.store.dispatch(new actions.CreatePizza(pizza));
    }

    updatePizza(id: string, size: string, name: string) {
        const pizza: Pizza = {
            id,
            size,
            name,
        };
        const updatePizza = {
            id,
            changes: pizza,
        };
        this.store.dispatch(new actions.UpdatePizza(updatePizza));
    }

    deletePizza(pizza) {
        this.store.dispatch(new actions.DeletePizza(pizza));
    }
}
