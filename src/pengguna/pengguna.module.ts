import { Module } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { PenggunaController } from './pengguna.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pengguna, PenggunaSchema } from './schemas/pengguna.schema';
@Module({
  controllers: [PenggunaController],
  providers: [PenggunaService],
  imports: [
    MongooseModule.forFeature([
      { name: Pengguna.name, schema: PenggunaSchema },
    ]),
  ],
})
export class PenggunaModule {}
