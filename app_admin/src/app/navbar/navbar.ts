import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({ 
  selector: 'app-navbar', 
  standalone: true, 
  imports: [CommonModule, RouterModule, RouterLink], 
  templateUrl: './navbar.html', 
  styleUrls: ['./navbar.css'],  
}) 
export class NavbarComponent implements OnInit { 
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router   // Inject router to navigate after logout
  ) { } 
  
  ngOnInit() { } 
  
  public isLoggedIn(): boolean { 
    return this.authenticationService.isLoggedIn(); 
  } 
  
  public onLogout(): void { 
    this.authenticationService.logout();
    this.router.navigate(['/login']);  // Redirect after logout
  } 
}
