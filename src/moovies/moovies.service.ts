import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateMoovyDto } from './dto/create-moovy.dto';
import { UpdateMoovyDto } from './dto/update-moovy.dto';

@Injectable()
export class MooviesService {
  constructor(private http: HttpService) { }
  create(createMoovyDto: CreateMoovyDto) {
    return 'This action adds a new moovy';
  }

  findAll() {
    return `This action returns all moovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moovy`;
  }

  update(id: number, updateMoovyDto: UpdateMoovyDto) {
    return `This action updates a #${id} moovy`;
  }

  remove(id: number) {
    return `This action removes a #${id} moovy`;
  }

  async getFromAPI(): Promise<any> {
    let getMoovies;
    try {
      console.log('test');
      getMoovies = await this.http
        .get('https://api.betaseries.com/search/', {
          headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': '3427df36-b57c-41ba-864e-eaa223003403',
          },
          params: {
            key: '8aad464fc9c0',
            query: 'Demon Slayer',
          },
        })
        .subscribe((moovie) => {
          console.log('🚀 ~ MooviesService ~ .subscribe ~ moovie', moovie);
        });
    } catch (error) {
      throw new Error(error);
    }
    return getMoovies;
  }
}
