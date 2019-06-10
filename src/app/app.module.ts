import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PizzaOrderComponent } from './pizza/components/pizza-order/pizza-order.component';
import { PizzaModule } from './pizza/pizza.module';

import { entityConfig } from './store/entity-metadata';
import {
    EntityDataModule,
    EntityServices,
    DefaultDataServiceConfig,
    EntityHttpResourceUrls,
} from '@ngrx/data';
import { PizzasService } from './pizza/services';
import { EffectsModule } from '@ngrx/effects';
import { PizzaSingleComponent } from './pizza/components/pizza-single/pizza-single.component';
import { environment } from 'src/environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: environment.apiUrl,
    timeout: 5000,
    entityHttpResourceUrls: {
        Pizza: {
            entityResourceUrl: `${environment.apiUrl}/pizzas/`,
            collectionResourceUrl: `${environment.apiUrl}/pizzas/`,
        },
    },
};

@NgModule({
    declarations: [AppComponent, PizzaOrderComponent, PizzaSingleComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        EntityDataModule.forRoot(entityConfig),
        HttpClientModule,
        PizzaModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
    ],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: defaultDataServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(entityServices: EntityServices, pizzasService: PizzasService) {
        entityServices.registerEntityCollectionServices([pizzasService]);
    }
}
