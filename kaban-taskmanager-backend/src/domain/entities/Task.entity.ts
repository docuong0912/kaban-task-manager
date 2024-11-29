import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '../base/Base.entity';
import mongoose from 'mongoose';
import { EnumTaskStatus } from '../enums/EnumTaskStatus';
@Schema()
export class Task extends BaseEntity {
  @Prop({
    maxlength: 50,
  })
  title: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  })
  mainTask?: Task;
  @Prop({
    enum: EnumTaskStatus,
    default: EnumTaskStatus.UNDONE,
  })
  status: number;
  @Prop({
    maxlength: 100,
  })
  description: string;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
