import { Component, NgZone } from "@angular/core";
import { Auth, Hub } from "aws-amplify";
import { AuthService } from "../app/components/auth/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Demo";
  user: any = null;

  constructor(private zone: NgZone, private authService: AuthService) {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        this.user = user;
        authService.setAccessToken(user.signInUserSession.accessToken.jwtToken);
      })
      .catch(() => console.log("Not signed in"));
  }

  ngOnInit() {}

  onLoginOktaClick(event) {
    event.preventDefault();
    // const url =
    //   "https://octa.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=1nakqpl7qmdmppvis5bp1ej4p0&redirect_uri=https://d1z71cxu36weec.cloudfront.net/upload";
    // window.location.assign(url);
    Auth.federatedSignIn({
      customProvider: "Okta",
    });
  }

  async signOut(event) {
    event.preventDefault();
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
}
