import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MooviesService } from './moovies.service';
import { CreateMoovyDto } from './dto/create-moovy.dto';
import { UpdateMoovyDto } from './dto/update-moovy.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('moovies')
@Controller('moovies')
export class MooviesController {
  constructor(private readonly mooviesService: MooviesService) { }

  @Post()
  create(@Body() createMoovyDto: CreateMoovyDto) {
    return this.mooviesService.create(createMoovyDto);
  }

  @Get()
  findAll() {
    return this.mooviesService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.mooviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoovyDto: UpdateMoovyDto) {
    return this.mooviesService.update(+id, updateMoovyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mooviesService.remove(+id);
  }

  @Get('/getFromApi/')
  async getFromAPI() {
    const response = await this.mooviesService.getFromAPI();
    return response;
  }
}
