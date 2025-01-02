import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty({ description: 'The room number' })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({ description: 'The type of the room (e.g., Single, Double, Suite)' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ description: 'The price per night for the room' })
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'The ID of the hotel to which the room belongs' })
  @IsNotEmpty()
  @IsNumber()
  hotelId: number;
}
