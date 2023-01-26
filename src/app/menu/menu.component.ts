import { Component } from '@angular/core';
import {Router} from '@angular/router';

enum MENU { NAKUPY, POLOZKY}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

  otvorMenu(m: MENU) {
    if (m === MENU.NAKUPY) {
      this.router.navigate(['/nakupy']);
    }
    if (m === MENU.POLOZKY) {
      this.router.navigate(['/polozky']);
    }

  }

}
