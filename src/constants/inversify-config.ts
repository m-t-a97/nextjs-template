import { Container } from 'inversify';

import { IHelloWorldService } from '../services/i-hello-world.service';
import { LogHelloWorldService } from '../services/log-hello-world.service';
import TYPES from './inversify-types';

const container = new Container();

container
  .bind<IHelloWorldService>(TYPES.HelloWorldService)
  .to(LogHelloWorldService)
  .inSingletonScope();

export default container;
