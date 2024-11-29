import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> | Promise<Observable<any>> {
    const statusCode = context.switchToHttp().getResponse().statusCode;
    let code;
    if (statusCode >= 200 && statusCode < 300) {
      code = 0; // 2xx success codes
    } else if ((statusCode >= 400 && statusCode < 500) || (code >= 500 && code < 600)) {
      code = 1; // 4xx and 5xx fail codes
    }
    return next.handle().pipe(
      map((data) => ({
        statusCode: code,
        message: '',
        data: {
          result: data ?? true,
          meta: {},
        },
      })),
    );
  }
}
