import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isNavbarExpanded = false;

  constructor() { }

  ngAfterViewInit(): void {
    const navbarToggle = document.querySelector("#navbar-toggle") as HTMLElement;
    const navbarMenu = document.querySelector("#navbar-menu") as HTMLElement;
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links") as HTMLElement;

    if (navbarToggle) {
      navbarToggle.addEventListener("click", this.toggleNavbarVisibility.bind(this));
    }

    if (navbarLinksContainer) {
      navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    }

    if (navbarMenu) {
      navbarMenu.addEventListener("click", this.toggleNavbarVisibility.bind(this));
    }
  }

  toggleNavbarVisibility(): void {
    this.isNavbarExpanded = !this.isNavbarExpanded;
    const navbarToggle = document.querySelector("#navbar-toggle");
    if (navbarToggle) {
      navbarToggle.setAttribute("aria-expanded", String(this.isNavbarExpanded));
    }
  }
}