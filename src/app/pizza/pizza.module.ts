import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PizzasService } from './services';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule,
    ],
    providers: [PizzasService]
})
export class PizzaModule {}
