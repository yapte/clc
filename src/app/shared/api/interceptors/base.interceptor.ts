import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { DEFAULT_TOKEN } from '../tokens/default.token';
import { TokenType } from '../tokens/token-type.enum';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const context: TokenType = request.context.get(DEFAULT_TOKEN);

    if (context === TokenType.Rpc) {
      request = request.clone({
        body: {
          ...(request.body as Object),
        }
      });
    }

    return next.handle(request)
      .pipe(
        map(response => {
          console.log(response);

          if (response instanceof HttpResponse) {

            if (context === TokenType.Rpc) {
              if (response.body.code === 200)
                return new HttpResponse({ body: response.body.success });
              if (response.body.code > 400)
                throw new HttpErrorResponse({ error: response.body.error, status: response.body.code });
            }
          }
          return response;
        }));
  }
}
