import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LoggerService {
    constructor(@Inject('Prefix') private readonly prefix: string){}
    Log(message: string){
        console.log(this.prefix, message);
    }
}
