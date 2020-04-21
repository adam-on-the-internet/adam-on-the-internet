import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get isAdmin(): boolean {
    return CookieHelper.getUserDetails().admin;
  }

  public get userEmail(): string {
    if (this.isLoggedIn) {
      return CookieHelper.getUserDetails().email;
    } else {
      return null;
    }
  }

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToProjects(): void {
    this.navHelper.goToProjects();
  }

  public goToResources(): void {
    this.navHelper.goToResources();
  }

  public goToAboutMe(): void {
    this.navHelper.goToAboutMe();
  }

  public goToContact(): void {
    this.navHelper.goToContact();
  }

  public goToInfo(): void {
    this.navHelper.goToInfo();
  }
}
