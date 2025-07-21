import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty({ description: 'The name of the hotel' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'A brief description of the hotel',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The location of the hotel' })
  @IsNotEmpty()
  @IsString()
  location: string;
}
