import { Injectable } from "@angular/core";
import awsmobile from "../../../aws-exports";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  accessToken: string = "";
  constructor() {}
  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(val) {
    this.accessToken = val;
  }
}
