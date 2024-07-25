import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
