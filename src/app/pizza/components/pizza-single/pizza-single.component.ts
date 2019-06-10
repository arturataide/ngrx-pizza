import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  @Input() pizza: Pizza;
  constructor(private pizzasService: PizzasService) { }

  ngOnInit() {
  }

  deletePizza(pizza: Pizza) {
    this.pizzasService.delete(pizza);
  }

  updatePizza(pizza: Pizza, size: string) {
    pizza.size = size;
    this.pizzasService.update(pizza);
  }

}
