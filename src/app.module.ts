import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Environment } from './environment/environment';
import { MooviesModule } from './moovies/moovies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Environment.db_host,
      port: 3306,
      username: Environment.db_user,
      password: Environment.db_password,
      database: Environment.db_name,
      logging: Environment.db_log_enabled,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: { timezone: 'utc' },
    }),
    ConfigModule.forRoot({ envFilePath: './environment/.env', isGlobal: true }),
    MooviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
