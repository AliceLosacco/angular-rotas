import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('alunos guard: guarda de rota filha')

        /*if (state.url.includes('editar')){
            alert('Usuário sem acesso')
            return false
        }*/

        return true

    }

}