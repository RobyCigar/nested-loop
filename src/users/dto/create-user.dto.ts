import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateUserDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'First name' })
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Last name' })
  last_name: string;
}
