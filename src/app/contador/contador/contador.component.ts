import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>
        <h3>La base es: {{ base }} </h3>
        <br>
        <button (click)="acumular( base )" > + {{ base }} </button>
        <button (click)="acumular( - base )" > - {{ base }} </button>
        <h2>
            <span> {{ numero }} </span>
        </h2>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10
    base: number = 5
    acumular( valor: number ): void {
      this.numero += valor
    }
    
    sumar(): void {
      this.numero += 1
    }
  
    restar(): void {
      this.numero -= 1
    }
  
}