import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dec-detail",
  templateUrl: "./dec-detail.component.html",
  styleUrls: ["./dec-detail.component.scss"],
})
export class DecDetailComponent implements OnInit {
  docId: number;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.paramMap.subscribe((paramsMap) => {
      console.log(this._route.snapshot.paramMap.get("id"));
      this.docId = +paramsMap.get("id");
    });

    this._route.url.subscribe((url) =>
      console.log("The URL changed to: " + url)
    );
  }
}
