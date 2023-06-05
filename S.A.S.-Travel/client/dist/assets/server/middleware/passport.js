const User = require("../models/index");
const { Strategy, ExtractJwt } = require("passport-jwt");
const SECRET = process.env.ACCESS_TOKEN_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

module.exports = passport => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      await User.findById(payload.user.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(error => {
          return done(null, false);
        });
    })
  );
};

