import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [PrismaModule, HotelModule, RoomModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
