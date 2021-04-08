import { Component, OnInit } from "@angular/core";
import { Component } from "@angular/core";

import { products } from "../products";
@Component({
  selector: "app-my-illustration",
  templateUrl: "./my-illustration.component.html",
  styleUrls: ["./my-illustration.component.css"]
})
export class MyIllustrationComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit() {}
  signin() {
    window.alert("You are successfully signed in!!");
  }
  signup() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
