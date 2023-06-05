var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.set("strictQuery", false);

var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
    contact: {
    type: String,
  },
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

//export to controllers!!!
module.exports = mongoose.model('user', UserSchema);