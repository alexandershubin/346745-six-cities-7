import { Container } from 'inversify';

import { RestApplication } from './rest.application.js';
import { Component } from '../shared/types/index.js';
import { LoggerInterface, PinoLogger } from '../shared/libs/logger/index.js';
import { ConfigInterface, RestConfig, TRestSchema } from '../shared/libs/config/index.js';
import { DatabaseClient, MongoDatabaseClient } from '../shared/libs/database-client/index.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<TRestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  return restApplicationContainer;
}
