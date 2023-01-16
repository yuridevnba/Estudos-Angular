import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico1',
  templateUrl: './exemplo-servico1.component.html',
  styleUrls: ['./exemplo-servico1.component.css']
})
export class ExemploServico1Component {

  nome="";

constructor(private logger: LoggerService){ // injetar o serviço dentro do componente.

}


  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }

}
