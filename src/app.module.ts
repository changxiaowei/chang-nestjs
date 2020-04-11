import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

const mockAppService = {
    getHello(){
        return 'test'
    }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
      provide: AppService,
      useClass: AppService
  }, {
      provide: "LOGGER",
      useClass: LoggerService
  },
{
    provide: "DEMO-Factory",
    useFactory: () => {
        return 'factory'
    }
}],
})
export class AppModule {}
