import { Injectable } from '@nestjs/common';
import { CreateCocotDto } from './dto/create-cocot.dto';
import { UpdateCocotDto } from './dto/update-cocot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cocot } from './schemas/cocot.schema';
@Injectable()
export class CocotService {
  constructor(
    @InjectModel(Cocot.name) private cocotModel: Model<Cocot>,
  ) {}
  create(createCocotDto: CreateCocotDto) {
    const createdCocot= this.cocotModel.create({
      text: createCocotDto.text,
      parent: createCocotDto.parentId || null,
      pengguna: createCocotDto.penggunaId,
    });
    return createdCocot.then((doc) => {
      return doc.populate(['pengguna', 'parent']);
    });
  }

  findAll() {
    return this.cocotModel.find().populate(['pengguna', 'parent']).exec();
  }

  getTopLevelCocot(){
    return this.cocotModel
    .find({
      parent: null,
    })
    .populate(['pengguna', 'parent'])
    .exec();
  }

  getCocotByParentId(parentId: string){
    return this.cocotModel
    .find({
      parent: parentId,
    })
    .populate(['pengguna', 'parent'])
    .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} cocot`;
  }

  update(id: number, updateCocotDto: UpdateCocotDto) {
    return `This action updates a #${id} cocot`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocot`;
  }
}
