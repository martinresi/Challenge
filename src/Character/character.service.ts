import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character, CharacterDocument } from './character.schema';
import { Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
  ) { }

  async index() {
    return await this.characterModel.find({}, 'name height mass birthYear eyeColor').exec();
  }

  async indexById(id: string) {
    let char = null;
    try {
      char = await this.characterModel.find({ _id: id }).exec();
    } catch (error) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }

    if (char.length === 0) throw new HttpException("Character not found", HttpStatus.NOT_FOUND);
    return char;
  }

  async create(character: Character): Promise<Character> {
    const createdCharacter = new this.characterModel(character);
    return createdCharacter.save();
  }

  async remove(id: any): Promise<any> {
    let _delete = null;
    try {
      _delete = await this.characterModel.deleteOne({ _id: id }).exec();

    } catch (error) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }

    if (_delete.deletedCount < 1) throw new HttpException("Character not found", HttpStatus.NOT_FOUND);
    return {
      "message": "Character eliminado"
    }
  }
}
