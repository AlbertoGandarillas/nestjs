import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('CPL API')
      .setDescription(
        'API documentation for CPL College Landing pages and CPL Dashboard projects',
      )
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  app.enableCors();
  await app.listen(process.env.PORT ?? 4000);
}
export default bootstrap;

bootstrap();
