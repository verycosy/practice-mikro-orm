import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  dbName: 'test',
  port: 45432,
  user: 'test',
  password: 'test',
  entities: ['dist/entities/**/*.entity.js'],
  entitiesTs: ['src/entities/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
