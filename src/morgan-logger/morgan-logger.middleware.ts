import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import morgan from 'morgan';
import { MorganLoggerService } from './morgan-logger.service';

@Injectable()
export class MorganLoggerMiddleware implements NestMiddleware {
  constructor(
    @Inject('MORGAN_OPTIONS')
    private options: { name: string; format?: string },
    private morganLoggerService: MorganLoggerService,
  ) {}
  use(req: any, res: any, next: () => void) {
    morgan(this.options.format || 'dev', { stream: this.morganLoggerService })(
      req,
      res,
      next,
    );
  }
}
