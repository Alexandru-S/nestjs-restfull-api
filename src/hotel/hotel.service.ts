import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHotelDto: CreateHotelDto) {
    return this.prisma.hotel.create({
      data: createHotelDto,
    });
  }

  findAll() {
    return this.prisma.hotel.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotel.findUnique({
      where: { id },
    });
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
