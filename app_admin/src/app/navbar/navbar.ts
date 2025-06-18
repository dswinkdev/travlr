import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({ 
  selector: 'app-navbar', 
  standalone: true, 
  imports: [CommonModule, RouterLink ], 
  templateUrl: './navbar.html', 
  styleUrl: './navbar.css', 
}) 

export class NavbarComponent implements OnInit { 
  
  constructor(
    private authenticationService: AuthenticationService
  ) { } 
  
  ngOnInit() { } 
  
  public isLoggedIn(): boolean { 
    return this.authenticationService.isLoggedIn(); 
  } 
  
  public onLogout(): void { 
    return this.authenticationService.logout(); 
  } 
} 
