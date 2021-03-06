import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToContact(): void {
    this.goToRoute(ROUTES_ENUM.Contact);
  }

  public goToAboutMe(): void {
    this.goToRoute(ROUTES_ENUM.AboutMe);
  }

  public goToProjects(): void {
    this.goToRoute(ROUTES_ENUM.Projects);
  }

  public goToResources(): void {
    this.goToRoute(ROUTES_ENUM.Resources);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
