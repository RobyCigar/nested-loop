import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';

@InputType()
export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
