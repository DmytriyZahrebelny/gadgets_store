import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { json } from 'body-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json());
  app.use(cookieParser());
  await app.listen(5000);
}
bootstrap();
