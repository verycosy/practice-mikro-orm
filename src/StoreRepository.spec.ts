import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Store, StoreAddress } from './entities/Store.entity';

describe('', () => {
  let orm: MikroORM<IDatabaseDriver<Connection>>;
  let storeRepository: EntityRepository<Store>;

  beforeAll(async () => {
    orm = await MikroORM.init();
    storeRepository = orm.em.getRepository(Store);
  });

  afterAll(async () => {
    await storeRepository.createQueryBuilder().truncate().execute();
    await orm.close();
  });

  it('새로운 가게 생성', async () => {
    // given
    const store = new Store('신장 개업', StoreAddress.시흥);

    // when
    await storeRepository.persistAndFlush(store);

    // then
    expect(store.name).toBe('신장 개업');
    expect(store.address).toBe(StoreAddress.시흥);
  });

  it('dd', async () => {
    // given
    const store = new Store('신장 개업', StoreAddress.시흥);
    store.addMenu('신메뉴', 3500);

    // when
    await storeRepository.persistAndFlush(store);

    // then
    const menu = store.menus[0];
    expect(store.menus.length).toBe(1);
    expect(menu.name).toBe('신메뉴');
    expect(menu.price).toBe(3500);
  });

  it('zz', async () => {
    // given
    const store = new Store('신장 개업', StoreAddress.시흥);
    store.addMenu('신메뉴 1', 1000);
    store.addMenu('신메뉴 2', 2000);

    await storeRepository.persistAndFlush(store);

    // when
    const result = await orm.em.findOneOrFail(Store, 3);

    // then
    console.log(result);
  });
});
