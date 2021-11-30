import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any
  inscricao!: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {

    console.log('ngOnInit: aluno detalhe component')
    
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o obj aluno do resolver');
        this.aluno = info.aluno;
      }
    )

  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'], {state: {data: this.aluno}} )
    console.log(history.state.data)
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
