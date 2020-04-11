import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from './logger.service'
@Injectable()
export class AppService {
    constructor( @Inject('LOGGER')private readonly logger: LoggerService, @Inject('DEMO-Factory') demo: string){
        console.log(demo);
    }
  getHello(): string {
      this.logger.log('Appservie: Hello World');
    return 'Hello World!';
  }
}
