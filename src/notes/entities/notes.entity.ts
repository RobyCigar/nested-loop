import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  @Index()
  @Column({ primary: true })
  id: number;

  @PrimaryGeneratedColumn()
  @Index()
  @Column({ generated: 'uuid' })
  uuid: number;

  @Column({ type: 'longtext' })
  content: string;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn()
  user: User;
}
