import { PrimaryGeneratedColumn } from 'typeorm';

export class Moovy {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;
}
