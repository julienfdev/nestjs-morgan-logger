import { DynamicModule, Module } from '@nestjs/common';
import { MorganLoggerMiddleware } from './morgan-logger.middleware';
import { MorganLoggerService } from './morgan-logger.service';

@Module({
  providers: [
    { provide: 'MORGAN_OPTIONS', useValue: { name: 'MorganLogger' } },
    MorganLoggerMiddleware,
    MorganLoggerService,
  ],
  exports: [
    { provide: 'MORGAN_OPTIONS', useValue: { name: 'MorganLogger' } },
    MorganLoggerMiddleware,
    MorganLoggerService,
  ],
})
export class MorganLoggerModule {
  static forRoot(options: { name: string; format?: string }): DynamicModule {
    return {
      module: MorganLoggerModule,
      providers: [
        { provide: 'MORGAN_OPTIONS', useValue: options },
        MorganLoggerMiddleware,
        MorganLoggerService,
      ],
      exports: [
        MorganLoggerMiddleware,
        { provide: 'MORGAN_OPTIONS', useValue: options },
        MorganLoggerService,
      ],
    };
  }
}
