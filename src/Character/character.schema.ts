import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema({ collection: 'characters' })
export class Character {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  _id_?: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  mass: number;

  @Prop({ required: true })
  hairColor: string;

  @Prop({ required: true })
  skinColor: string;

  @Prop({ required: true })
  eyeColor: string;

  @Prop({ required: true })
  birthYear: number;
}

export const CharactersSchema = SchemaFactory.createForClass(Character);
