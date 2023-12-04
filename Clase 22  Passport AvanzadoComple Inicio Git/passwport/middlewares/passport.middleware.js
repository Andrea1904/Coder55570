import passport from 'passport'
import passportJwt from 'passport-jwt'
import {cookieExtractor} from '../utils/utils.js'
const SECRET_KEY= 'top-secret-51'

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: SECRET_KEY,
  },
  async (jwt_payload, done) => {
    try {
      // const user = await UserModel.findOne({ email: jwt_payload.email});
      // if (!user) {
      //   return done(null, false, { messsages: 'User not found'});
      // }

      return done(null, jwt_payload);
    }
    catch(error) {
      return done(error);
    }
  }
));

export default passport;