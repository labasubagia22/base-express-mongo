/* eslint-disable camelcase */
import mongoose, { Document } from 'mongoose';

export interface Timestamps {
  created_at?: string;
  updated_at?: string;
}

export interface BaseModelFields extends Timestamps {
  _id?: mongoose.Types.ObjectId;
}

export type ModelDocument<T> = T & Document;
