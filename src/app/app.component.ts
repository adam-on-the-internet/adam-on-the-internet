import { Component, OnInit } from "@angular/core";
import { LogService } from "./services/log.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "adam-on-the-internet";

  constructor(
    private logService: LogService,
  ) { }

  public ngOnInit() {
    this.logStart();
  }

  private logStart() {
    this.logService.log("info", "application visited").subscribe();
  }
}
