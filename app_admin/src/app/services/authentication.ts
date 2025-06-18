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

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    this.storage.removeItem(this.tokenKey);
    this.authResp = new AuthResponse();
  }

  // Update login method to accept password argument
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

  // Update register method to accept password argument
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
