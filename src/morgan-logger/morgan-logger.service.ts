import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MorganLoggerService {
  private logger = new Logger(this.options.name);
  constructor(
    @Inject('MORGAN_OPTIONS')
    private options: { name: string; format?: string },
  ) {}
  write(s: string) {
    this.logger.log(s.trim());
  }
}
