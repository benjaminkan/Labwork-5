import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
// Creating the array of the pages, define page names and path inside
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activePath = '';
  pages = [
    {
      name: 'Etusivu',
      path: '/members/dashboard'
    },
    {
      name: 'Info',
      path: '/members/about'
    }
  ];
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
