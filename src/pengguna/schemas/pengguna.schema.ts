import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PenggunaDocument = HydratedDocument<Pengguna>;

@Schema()
export class Pengguna {
  @Prop()
  name: string;
}

export const PenggunaSchema = SchemaFactory.createForClass(Pengguna);
