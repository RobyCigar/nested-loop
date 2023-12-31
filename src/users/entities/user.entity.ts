import { Note } from 'src/notes/entities/notes.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Index()
  @Column({ primary: true })
  id: number;

  @PrimaryGeneratedColumn()
  @Index()
  @Column({ generated: 'uuid' })
  uuid: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: false })
  is_banned: boolean;

  @OneToMany(() => Note, (notes) => notes.user)
  @JoinColumn()
  notes: Note[];
}
