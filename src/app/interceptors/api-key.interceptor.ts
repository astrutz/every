import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = localStorage.getItem('API_KEY') || environment.apiKey || '';

    // Do not attach for health or root optionally
    if (!apiKey || req.url.endsWith('/health')) {
      return next.handle(req);
    }

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return next.handle(cloned);
  }
}
