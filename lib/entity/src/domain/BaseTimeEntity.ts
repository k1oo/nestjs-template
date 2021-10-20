import {
  CreateDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseTimeEntity {
  @Generated('increment')
  @PrimaryColumn({ type: 'integer' })
  id: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
