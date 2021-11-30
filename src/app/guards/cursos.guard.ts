import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CursosService } from "../cursos/cursos.service";

@Injectable({
    providedIn: 'root'
})
export class CursosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        
        return true
    }

}