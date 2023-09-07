import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // isNavbarFixed = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isNavbarFixed = window.pageYOffset > 0;
  // }



  ngOnInit(): void {
  }

}
