import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome</h1>

    <button *ngIf="!(auth.isAuthenticated$ | async)" (click)="auth.loginWithRedirect()">
      Login
    </button>

    <button *ngIf="auth.isAuthenticated$ | async"
            (click)="logout()">
      Logout
    </button>
  `
})
export class HomeComponent {
  returnTo = window.location.origin;

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.returnTo,
      },
    });
  }
}
