import { ApiProperty } from '@nestjs/swagger';

export class NoteDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  userId: string;
}
