import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private auth0ApiUrl = 'https://dev-2xlyhzwr7rpiwjnn.us.auth0.com/api/v2/userinfo'; // Auth0 Userinfo endpoint

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Function to get user details from Auth0
  getUserDetails(): Observable<any> {
    // Retrieve the access token from Auth0
    return new Observable((observer) => {
      this.auth.getAccessTokenSilently().subscribe((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        });

        // Make a GET request to Auth0's user info endpoint
        this.http.get(this.auth0ApiUrl, { headers }).subscribe(
          (response) => {
            observer.next(response);  // Pass the user details
            observer.complete();
          },
          (error) => {
            observer.error(error);  // Handle errors
          }
        );
      });
    });
  }
}
