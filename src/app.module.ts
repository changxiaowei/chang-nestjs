import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';
import { CoreModule } from './modules/core/core.module';

const mockAppService = {
    getHello(){
        return 'test'
    }
}

@Module({
  imports: [UserModule, AuthModule, CoreModule],
  controllers: [AppController],
  providers: [{
      provide: AppService,
      useClass: AppService
  }],
})
export class AppModule {}
