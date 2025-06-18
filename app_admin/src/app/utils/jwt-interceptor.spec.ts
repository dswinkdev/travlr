import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';

import { JwtInterceptor } from './jwt-interceptor';
import { AuthenticationService } from '../services/authentication';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        {
          provide: AuthenticationService,
          useValue: {
            isLoggedIn: () => false,
            getToken: () => ''
          }
        }
      ]
    });

    interceptor = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should pass through request without Authorization if not logged in', (done) => {
    const request = new HttpRequest('GET', '/api/test');
    const next: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.has('Authorization')).toBe(false);
        return of({} as HttpEvent<any>);
      }
    };

    interceptor.intercept(request, next).subscribe(() => done());
  });
});
