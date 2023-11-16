import { Module } from '@nestjs/common';
import { CocotService } from './cocot.service';
import { CocotController } from './cocot.controller';
import {MongooseModule} from '@nestjs/mongoose'
import { Cocot, CocotSchema } from './schemas/cocot.schema';

@Module({
  controllers: [CocotController],
  providers: [CocotService],
  imports: [
    MongooseModule.forFeature([
      { name: Cocot.name, schema: CocotSchema },
    ]),
  ],
})
export class CocotModule {}
