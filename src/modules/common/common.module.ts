import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule.register('测试')],
  exports: [LoggerModule]
})
export class CommonModule {}
