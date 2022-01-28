import { Entity } from '@mikro-orm/core';
import { BaseTimeEntity } from './BaseTimeEntity';

@Entity()
export class User extends BaseTimeEntity {}
