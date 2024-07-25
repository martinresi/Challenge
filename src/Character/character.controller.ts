import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './create-character.dto';

@Controller()
export class CharacterController {
  constructor(private readonly appService: CharacterService) {}

  // Retorno de todos los caracteres
  @Get('/characters')
  index() {
    return this.appService.getAllCharacters();
  }

  // Busqueda de caracteres por id
  @Get('/characters/:id')
  findById(@Param() params) {
    return this.appService.getById(params.id);
  }

  // Guardado de caracter
  @Post('/characters')
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.appService.createCharacter(createCharacterDto);
  }

  // Eliminado de caracter
  @Delete('/characters/:id')
  deleteById(@Param() params) {
    return this.appService.remove(params.id);
  }
}
