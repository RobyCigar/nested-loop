import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateNoteDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Content of the notes' })
  content: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'User id relation' })
  userId: string;
}
