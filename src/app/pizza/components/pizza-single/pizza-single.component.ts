import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  @Input() pizza: Pizza;
  constructor() { }

  ngOnInit() {
    console.log(this.pizza);
  }

}
