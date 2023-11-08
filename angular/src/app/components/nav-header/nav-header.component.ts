import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  constructor(private router: Router) {
  }

  toMain() {
    this.router.navigate(['/main']);
  }

  toRisk() {
    this.router.navigate(['/risk']);
  }

  toTax() {
    this.router.navigate(['/tax']);
  }
}
