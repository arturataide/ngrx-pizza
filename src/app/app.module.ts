import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { PizzaOrderComponent } from './pizza/components/pizza-order/pizza-order.component';
import { PizzaModule } from './pizza/pizza.module';
import { reducers } from './store/reducers';
import { PizzaEffects } from './pizza/store/effects/pizza.effects';
import { PizzasService } from './pizza/services';

@NgModule({
    declarations: [AppComponent, PizzaOrderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([PizzaEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        HttpClientModule,
        PizzaModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        FlexLayoutModule,
    ],
    providers: [PizzasService],
    bootstrap: [AppComponent],
})
export class AppModule {}
