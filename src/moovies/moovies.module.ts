import { Module } from '@nestjs/common';
import { MooviesService } from './moovies.service';
import { MooviesController } from './moovies.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MooviesController],
  providers: [MooviesService],
})
export class MooviesModule { }
