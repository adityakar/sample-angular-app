import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "aws-amplify";
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        return true;
      })
      .catch(() => {
        //this._router.navigate(["/login"]);
        Auth.federatedSignIn({
          customProvider: "Okta",
        });
        return false;
      });
  }
}
