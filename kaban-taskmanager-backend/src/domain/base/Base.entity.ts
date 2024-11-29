import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'lastSavedTime',
  },
})
export class BaseEntity extends Document {
  _id: mongoose.Types.ObjectId;
  @Prop()
  createdUser?: mongoose.Types.ObjectId;
  @Prop()
  lastSavedUser?: mongoose.Types.ObjectId;
  @Prop({
    default: false,
  })
  isDeleted: boolean;
  @Prop({ default: Date.now })
  createdTime: Date;

  @Prop({ default: Date.now })
  lastSavedTime: Date;
}
