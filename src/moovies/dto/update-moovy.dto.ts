import { PartialType } from '@nestjs/swagger';
import { CreateMoovyDto } from './create-moovy.dto';

export class UpdateMoovyDto extends PartialType(CreateMoovyDto) {}
