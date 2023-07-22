import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;
}
