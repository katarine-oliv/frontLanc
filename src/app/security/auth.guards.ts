import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthGuards implements CanActivate{
  constructor(private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = sessionStorage.getItem("token");
    if(!token){
      if(state.url.endsWith('login')){
        return true;
      }
      this.router.navigate(["login"])
    } else {
      if(state.url.endsWith("login")){
        this.router.navigate(["principal"])
      }
    }
    return true;
  }

}
