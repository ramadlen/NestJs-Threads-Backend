import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Pengguna } from 'src/pengguna/schemas/pengguna.schema';

export type CocotDocument = HydratedDocument<Cocot>;

@Schema({
  timestamps: true, 
})
export class Cocot {
  @Prop()
  text: string;

  @Prop()
  likes:number;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref:'Pengguna' })
  pengguna: Pengguna;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref:'Cocot' })
  parent: Cocot | null;
}

export const CocotSchema = SchemaFactory.createForClass(Cocot);
