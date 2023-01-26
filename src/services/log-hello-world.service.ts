import 'reflect-metadata';

import { injectable } from 'inversify';

import { IHelloWorldService } from './i-hello-world.service';

@injectable()
export class LogHelloWorldService implements IHelloWorldService {
  public sayHello(name: string): void {
    console.log(`Hello ${name}.`);
  }
}
