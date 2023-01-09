import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
 nome="João"
 dataNascimento="1996-28-07"
 urlImagem ="/assets/joao.jpeg"

 mostrarDataNascimento(){
  alert(`A data de nascimento do João é: ${this.dataNascimento}`)
 }
}
