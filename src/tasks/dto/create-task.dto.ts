import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsDateString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['PENDING', 'IN_PROGRESS', 'DONE'])
  @IsOptional()
  status?: string;

  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
