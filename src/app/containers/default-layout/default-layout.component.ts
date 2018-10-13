import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import{ Router } from '@angular/router'
import { AuthService } from '../../views/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor( private router:Router,private auth: AuthService) {

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
