# nest-morgan-logger

## Overview

![a log example](https://github.com/julienfdev/nestjs-morgan-logger/blob/media/media/log.png?raw=true)


We all know and love [morgan](https://www.npmjs.com/package/morgan), the handy Express middleware which esthetically logs HTTP requests to the console. 
One such feature is lacking in Nest native integration : that's why nestjs-morganlogger exists !

## Features

nest-morgan-logger wraps morgan in the native Nest.js logger module. This way, requests are beautifully logged, in an harmonious and "native" way.

## Usage

nest-morgan-logger provides a configurable **module** and a **middleware** that can be used as such

- Inside your app.module.ts, import the Module and Middleware :

```ts
// Import the module and middleware
import { MorganLoggerMiddleware, MorganLoggerModule } from 'nestjs-morganlogger';

@Module({
   // Importing the module without any config info
  imports: [MorganLoggerModule],
})
export class AppModule implements NestModule {
   // Consuming the middleware
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganLoggerMiddleware).forRoutes('*');
  }
}
```

- Alternatively, you can provide options to the static method `forRoot` of the module

```ts 
  imports: [MorganLoggerModule.forRoot({ name: 'HTTPLogger', format: "combined" })],
```

The name will be passed to the native Logger instance, format is mapped to the `format` parameter of morgan (see : [format](https://www.npmjs.com/package/morgan#using-a-predefined-format-string))