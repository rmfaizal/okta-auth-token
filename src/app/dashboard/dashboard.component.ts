import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // Import the UserService

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <ng-container *ngIf="user">
      <p>Welcome, {{ user.name }}!</p>
      <p>Email: {{ user.email }}</p>
      <p>Role: {{ user.role }}</p> <!-- Example field -->
    </ng-container>
    <ng-container *ngIf="error">
      <p>Error: {{ error }}</p>
    </ng-container>
  `,
})
export class DashboardComponent implements OnInit {
  user: any;
  error: string='';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Fetch user details when the component initializes
    this.userService.getUserDetails().subscribe(
      (data) => {
        this.user = data;  // Assign fetched data to user variable
      },
      (err) => {
        this.error = err?.message || 'Failed to fetch user data';  // Handle error
      }
    );
  }
}
