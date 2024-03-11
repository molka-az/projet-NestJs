import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './modules/static/static.module';
import { DynamicModule } from './modules/dynamic/dynamic.module';
//import { AuthModule } from './services/auth/auth.module';
import { AuthMiddleware } from './services/auth/auth.middleware';

@Module({
  imports: [StaticModule, DynamicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('secured-route'); // Ajoutez ici vos routes sécurisées
  }
}
