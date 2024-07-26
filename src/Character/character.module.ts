import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Character]), ConfigModule],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
