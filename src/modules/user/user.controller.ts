import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CommonModule } from '../common/common.module';
import { LoggerService } from '../common/logger/logger.service';

@Controller()
export class UserController {
    constructor(private readonly userService:UserService,
        private readonly logger: LoggerService){
        console.log('userService')
    }

    @Get('profile')
    getUser(){
        this.logger.Log('test is ');
       return this.userService.getUser();
    }
}
