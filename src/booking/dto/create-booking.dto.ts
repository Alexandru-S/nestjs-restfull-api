import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ description: 'Check-in date for the booking (YYYY-MM-DD format)' })
  @IsNotEmpty()
  @IsDateString()
  checkIn: string;

  @ApiProperty({ description: 'Check-out date for the booking (YYYY-MM-DD format)' })
  @IsNotEmpty()
  @IsDateString()
  checkOut: string;

  @ApiProperty({ description: 'Full name of the guest making the booking' })
  @IsNotEmpty()
  @IsString()
  guestName: string;

  @ApiProperty({ description: 'Email of the guest making the booking' })
  @IsNotEmpty()
  @IsEmail()
  guestEmail: string;

  @ApiProperty({ description: 'ID of the room being booked' })
  @IsNotEmpty()
  @IsNumber()
  roomId: number;
}
