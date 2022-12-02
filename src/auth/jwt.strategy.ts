import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('token'),
      ignoreExpiration: false,
      // For Prod, use a key vault, env var, etc
      secretOrKey: jwtConstants.secret,
    });
  }

  // Add more validation logic here for the decoded user like if token is revoked or user is blacklisted
  // Add more info to the user return value as necessary
  async validate(payload: any): Promise<User> {
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
