import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
    exports: [
        HeroComponent,
        ListaComponent,

    ],
    declarations: [
       HeroComponent,
       ListaComponent,
    ],
    imports:[
        CommonModule
    ]
   })
export class HeroesModule { }
