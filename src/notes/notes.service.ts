import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<any>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    return this.noteRepository.save(this.noteRepository.create(createNoteDto));
  }
  findAll() {
    return this.noteRepository.find();
  }

  findOne(id: string) {
    return this.noteRepository.findOne({
      where: {
        uuid: id,
      },
    });
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.noteRepository.update(id, updateNoteDto);
  }

  remove(id: string) {
    return this.noteRepository.delete(id);
  }
}
