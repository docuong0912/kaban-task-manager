import { ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskCommand {
  @IsNotEmpty()
  @ApiProperty()
  public readonly description: string;
  @IsNotEmpty()
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly mainTask: ObjectId;

  constructor(description: string, title: string, mainTask: ObjectId) {
    this.description = description;
    this.title = title;
    this.mainTask = mainTask;
  }
}
