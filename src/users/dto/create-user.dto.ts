import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'First name' })
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Last name' })
  last_name: string;
}
