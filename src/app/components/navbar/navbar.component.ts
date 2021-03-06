import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

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
}
