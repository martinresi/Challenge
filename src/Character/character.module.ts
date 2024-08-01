import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharactersSchema } from './character.schema';

@Module({
  //imports: [TypeOrmModule.forFeature([Character]), ConfigModule],
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharactersSchema },
    ]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
