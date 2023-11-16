import { Injectable } from '@nestjs/common';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pengguna } from './schemas/pengguna.schema';
import { Model } from 'mongoose';

@Injectable()
export class PenggunaService {
  constructor(
    @InjectModel(Pengguna.name) private penggunaModel: Model<Pengguna>,
  ) {}
  create(createPenggunaDto: CreatePenggunaDto) {
    const simpanPengguna = new this.penggunaModel(createPenggunaDto);
    return simpanPengguna.save();
  }

  findAll() {
    return this.penggunaModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} pengguna`;
  }

  update(id: number, updatePenggunaDto: UpdatePenggunaDto) {
    return `This action updates a #${id} pengguna`;
  }

  remove(id: number) {
    return `This action removes a #${id} pengguna`;
  }
}
