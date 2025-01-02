import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  findAll() {
    return this.prisma.room.findMany();
  }

  findOne(id: number) {
    return this.prisma.room.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
