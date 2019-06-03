import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaOrderComponent } from './components/pizza-order/pizza-order.component';
import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from './store/reducers/pizza.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PizzaSingleComponent } from './components/pizza-single/pizza-single.component';

@NgModule({
    declarations: [PizzaSingleComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('pizza', pizzaReducer),
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule,
    ],
})
export class PizzaModule {}
