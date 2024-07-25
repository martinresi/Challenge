import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './create-character.dto';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}
  // Metodo para obtener todos los caracteres de la DB
  getAllCharacters() {
    return this.characterRepository.find({
      select: ['id', 'name', 'mass', 'birthYear', 'eyeColor'],
    });
  }

  // Metodo para obtener caracter de la DB segun ID
  async getById(id) {
    const character = await this.characterRepository.findOneBy({ id });
    if (!character)
      throw new HttpException('Character not found', HttpStatus.NOT_FOUND);
    return character;
  }

  // Metodo para crear caracter y guardar en DB
  createCharacter(createCharacterDto: CreateCharacterDto) {
    const newCharacter = this.characterRepository.create(createCharacterDto);
    return this.characterRepository.save(newCharacter);
  }

  // Metodo para eliminar caracter segun ID
  async remove(id: number): Promise<any> {
    const character = await this.characterRepository.findOneBy({ id });
    if (!character) {
      throw new HttpException('Character not found', HttpStatus.BAD_REQUEST);
    }
    await this.characterRepository.delete(id);
    return { message: 'Character eliminado' };
  }
}
