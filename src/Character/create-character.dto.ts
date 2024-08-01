import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
//import { Schema } from 'mongoose';

// Definicion DTO para entidad Character
export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  height: number;
  @IsNotEmpty()
  @IsNumber()
  mass: number;
  @IsNotEmpty()
  @IsString()
  hairColor: string;
  @IsNotEmpty()
  @IsString()
  skinColor: string;
  @IsNotEmpty()
  @IsString()
  eyeColor: string;
  @IsNotEmpty()
  @IsNumber()
  birthYear: number;
}
