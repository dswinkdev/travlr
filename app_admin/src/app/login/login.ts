import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  public submitted = false;

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';

    if (
      !this.credentials.name ||
      !this.credentials.email ||
      !this.credentials.password
    ) {
      this.formError = 'All fields are required, please try again';
      return;
    }

    this.doLogin();
  }

  private doLogin(): void {
    this.submitted = true;

    const user: User = {
      name: this.credentials.name,
      email: this.credentials.email
    };

    this.authenticationService.login(user, this.credentials.password)
      .subscribe({
        next: (res) => {
          console.log('Login response:', res);
          if (res && res.token) {
            localStorage.setItem('token', res.token);   // Save JWT
            console.log('✅ Token saved. Redirecting to trips page...');
            this.router.navigate(['/']);                // Navigate to TripListingComponent
          } else {
            this.formError = 'Invalid response from server.';
            console.warn('⚠️ Invalid login response:', res);
          }
        },
        error: (err) => {
          this.formError = 'Login failed. Please check your credentials.';
          console.error('❌ Login error:', err);
          this.submitted = false;
        }
      });
  }
}
