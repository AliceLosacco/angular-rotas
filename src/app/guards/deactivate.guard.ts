import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosModule } from "../alunos/alunos.module";
import { FormCanDeactivate } from "./form-can-deactivate";

@Injectable({
    providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<FormCanDeactivate> {
    canDeactivate(
        component: FormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        console.log('guarda deact')
                
        //return component.podeMudarRota()

        return component.podeDesativar()
    }
}