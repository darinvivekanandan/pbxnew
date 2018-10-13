import { Component, Input, OnInit } from '@angular/core';
import { navItems1 } from './../../_nav1';
import{ Router } from '@angular/router'
import { AuthService1 } from '../../views/login/auth.service1';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout1.component.html'
})
export class DefaultLayout1Component implements OnInit {

  public navItems1 = navItems1;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor( private router:Router,private auth1: AuthService1) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit()
  {
//this.router.navigate(['/register']);
  }
}
