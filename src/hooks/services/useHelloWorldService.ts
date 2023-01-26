import container from '@/src/constants/inversify-config';
import TYPES from '@/src/constants/inversify-types';
import { IHelloWorldService } from '@/src/services/i-hello-world.service';

function useHelloWorldService() {
  return container.get<IHelloWorldService>(TYPES.HelloWorldService);
}

export default useHelloWorldService;
