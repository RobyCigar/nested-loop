import { Column, Entity } from 'typeorm';

@Entity()
export class Notification {
  @Column()
  message: string;

  @Column({ default: false })
  is_read: boolean;
}
