import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { CursosModule } from './cursos.module';

@Injectable()
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos()                   // cria o array com os cursos
    for (let i=0; i<cursos.length; i++ ){           // para cada curso dentro do array
      let curso = cursos[i]                         // nova variavel: curso, corresponde ao item atual do array
      if(curso.id == id){                           // se o id do curso for igual ao id passado por parametro
        return curso
      }
    }
    return null     //se não retornar true (curso.id == id) ele retorna vazio pois o id passado por parâmetro não corresponde a nenhum id do array
  }

  constructor() { }
}
