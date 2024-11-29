import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { EnumTaskStatus } from 'src/domain/enums/EnumTaskStatus';

export class UpdateTaskCommand {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
  @IsNotEmpty()
  @IsEnum(EnumTaskStatus, { message: 'status is not valid' })
  @ApiProperty()
  status: EnumTaskStatus;

  constructor(id: string, status: EnumTaskStatus) {
    this.id = id;
    this.status = status;
  }
}
