import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseTimeEntity } from './BaseTimeEntity';
import { Store } from './Store.entity';

@Entity()
export class Menu extends BaseTimeEntity {
  constructor(name: string, price: number) {
    super();

    this.name = name;
    this.price = price;
  }

  @ManyToOne()
  store: Store;

  @Property()
  name: string;

  @Property()
  price: number;
}
