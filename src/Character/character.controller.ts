import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './create-character.dto';
import { getDateTime } from '../utils/date';

@Controller()
export class CharacterController {
  private logger = new Logger();
  constructor(private readonly appService: CharacterService) { }

  // Retorno de todos los caracteres
  /*
  @Get('/characters')
  index() {
    this.logger.log(`[GET] /characters ${getDateTime()}`);
    return this.appService.getAllCharacters();
  }

  // Busqueda de caracteres por id
  @Get('/characters/:id')
  findById(@Param() params) {
    this.logger.log(`[GET] /characters/${params.id} ${getDateTime()}`);
    return this.appService.getById(params.id);
  }
  */

  @Get("/characters")
  async index() {
    this.logger.log(`[GET] /characters ${getDateTime()}`);
    return await this.appService.index();
  }

  @Get('/characters/:id')
  async findById(@Param() params) {
    this.logger.log(`[GET] /characters/${params.id} ${getDateTime()}`);
    return await this.appService.indexById(params.id);
  }

  // Guardado de caracter
  @Post('/characters')
  async create(@Body() createCharacterDto: CreateCharacterDto) {
    this.logger.log(`[POST] /characters ${getDateTime()}`);
    return this.appService.create(createCharacterDto);
  }

  @Delete("/characters/:id")
  async deleteById(@Param() params) {
    this.logger.log(`[DELETE] /characters/${params.id} ${getDateTime()}`);
    return this.appService.remove(params.id);
  }
  /*
  // Eliminado de caracter
  @Delete('/characters/:id')
  deleteById(@Param() params) {
    this.logger.log(`[DELETE] /characters/${params.id} ${getDateTime()}`);
    return this.appService.remove(params.id);
  }
  */
}
