import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu = false;
  showMobileMenu = false;
    toggleProfileDrodown(){
      this.showMenu = !this.showMenu;
    }

    toggleNavbar() {
      this.showMobileMenu = !this.showMobileMenu;
    }
}
