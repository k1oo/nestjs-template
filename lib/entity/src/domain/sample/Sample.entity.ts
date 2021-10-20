import { Column, Entity } from 'typeorm';
import { BaseTimeEntity } from '../BaseTimeEntity';

@Entity()
export class Sample extends BaseTimeEntity {
  @Column()
  title: string;

  @Column({ type: 'text' })
  body: string;

  @Column()
  isPublished: boolean;
}
