import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
    selector: 'pizza-order',
    templateUrl: './pizza-order.component.html',
    styleUrls: ['./pizza-order.component.scss'],
})
export class PizzaOrderComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;
    laoding$: Observable<boolean>;

    constructor(private pizzasService: PizzasService) {
        this.pizzas$ = this.pizzasService.entities$;
        this.laoding$ = this.pizzasService.loading$;
        console.log('pizzas', this.pizzas$);
    }

    ngOnInit() {
        this.getPizzas();
    }

    getPizzas() {
        this.pizzasService.getAll();
    }

    createPizza(pizza: Pizza) {
        this.pizzasService.add(pizza);
    }

    createPizzaHelper() {
        const id = String(Math.floor(Math.random() * 100));
        this.createPizza(new Pizza(id, 'small', 'New Pizza' + id));
    }
}
