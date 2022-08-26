import { Injectable, ValidationPipe } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private userService:UsersService) {
        super({
          jwtFromRequest: ExtractJwt.fromHeader('authorization'),
          ignoreExpiration: false,
          secretOrKey: 'segredo',
        });
      }
    
      async validate(payload: any) {
        const user = await this.userService.findOne(payload.email)
        const {password , ...result} = user
        return result
      }
}