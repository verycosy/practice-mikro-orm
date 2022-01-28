import { Collection, Entity, Enum, OneToMany, Property } from '@mikro-orm/core';
import { BaseTimeEntity } from './BaseTimeEntity';
import { Menu } from './Menu.entity';

export enum StoreAddress {
  광주 = '광주',
  시흥 = '시흥',
}

@Entity()
export class Store extends BaseTimeEntity {
  constructor(name: string, address: StoreAddress) {
    super();

    this.name = name;
    this.address = address;
  }

  @Enum()
  address: StoreAddress;

  @Property()
  name: string;

  @OneToMany(() => Menu, (menu) => menu.store, {})
  menus = new Collection<Menu>(this);

  addMenu(name: string, price: number): Menu {
    const menu = new Menu(name, price);
    this.menus.add(menu);

    return menu;
  }
}
