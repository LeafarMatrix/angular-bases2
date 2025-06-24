import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

    public heroNames: string[]=['Mazinger Z','Santo','Afrodita','He-Man','Thunder Cats'];
    public deletedHero?: string;
    

    removeLastHero():void {
       //const deletedHero =this.heroNames.pop();
       this.deletedHero = this.heroNames.pop();
      
    }
}
