import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from '../services/trip-data'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authResp: AuthResponse = new AuthResponse();
  private readonly tokenKey: string = 'travlr-token';

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}

  private saveToken(token: string): void {
    this.storage.setItem(this.tokenKey, token);
  }

  public getToken(): string {
    const token = this.storage.getItem(this.tokenKey);
    return token ? token : '';
  }

  // ✅ FIXED isLoggedIn to check if token exists and is valid
  public isLoggedIn(): boolean {
    const token = this.getToken();

    // Simple check: token exists and has three parts (JWT format)
    return !!token && token.split('.').length === 3;
  }

  public logout(): void {
    this.storage.removeItem(this.tokenKey);
    this.authResp = new AuthResponse();
  }

  // Login: uses tripDataService and stores token
  public login(user: User, passwd: string): Observable<AuthResponse> {
    return this.tripDataService.login(user, passwd).pipe(
      tap((res: AuthResponse) => {
        if (res.token) {
          this.saveToken(res.token);
          this.authResp = res;
        }
      })
    );
  }

  // Register: same as login, stores token
  public register(user: User, passwd: string): Observable<AuthResponse> {
    return this.tripDataService.register(user, passwd).pipe(
      tap((res: AuthResponse) => {
        if (res.token) {
          this.saveToken(res.token);
          this.authResp = res;
        }
      })
    );
  }
}
