import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hotel API')
    .setDescription('Hotel API description')
    .setVersion('0.1')
    .build();
  // Create a Swagger document using the application instance and the doc config
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
