import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { FormsModule } from "@angular/forms";
import { DeactivateGuard } from "../guards/deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [
        AlunosService,
        AlunoDetalheResolver
    ],
    declarations: [ 
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent 
    ],
})

export class AlunosModule { }