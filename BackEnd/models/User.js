const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//====================================//
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');
//=====================================//

let userSchema = new Schema({
   firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    contactNumber: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true
    },
    userType: {
        type: String
    },
    payRate: {
        type: String,
        default: '0'
    },
    squareRate: {
        type: String,
        default: '0'
    },
    address: {
        type: String
    },
    province: {
        type: String
    },
    password: {
        type: String,
        //required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
   /* cover_photo: {
        type: Array,
        default: []
    }, */
    profile_photo: {
        type: Array,
        default: []
    },
    cover_photo: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg'
    },
    /*
    profile_photo: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBc-AEj_9MJQIUQqlgB0a9Nao0kuhi4ydeyQ&usqp=CAU'
    }, */
    proffesion: {
        type: String,
        default: "Exterior Design/Interior Designer/Landscape Designer"
    },
    about: {
        type: String,
        default: "I'm talented exterior/interior/landscape designer......"
    },
    skill_1: {
        type: String,
        default: 'Creativity'
    },
    skill_2: {
        type: String,
        default: 'Analytical Thinking'
    },
    skill_3: {
        type: String,
        default: 'Auto CAD'
    },
    honor_1: {
        type: String,
        default: 'Best Designer of the year 2019'
    },
    honor_2: {
        type: String,
        default: ''
    },
    honor_3: {
        type: String,
        default: ''
    },
    education_1: {
        type: String,
        default: 'University of Moratuwa'
    },
    education_2: {
        type: String,
        default: ''
    },
    education_3: {
        type: String,
        default: ''
    },
    organization_1: {
        type: String,
        default: 'Sri Lanka Architect Association'
    },
    organization_2: {
        type: String,
        default: ''
    },
    organization_3: {
        type: String,
        default: ''
    },
    service_1: {
        type: String,
        default: 'Consultation'
    },
    service_2: {
        type: String,
        default: 'Planning'
    },
    service_3: {
        type: String,
        default: 'Designing'
    },
    experience_1: {
        type: String,
        default: 'Charted Architect at ABC Ferm'
    },
    experience_2: {
        type: String,
        default: ''
    },
    experience_3: {
        type: String,
        default: ''
    },
    portfolios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        default: null
    }], 
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
});/*,{
    collation: 'users'
}*/


//==============================================================//

userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        console.log('password changed')
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash,
                next()
            })
        })
    } else {
        next()
    }
});


userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

//Generate token for one hour for the current user 
userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user);
    })
}

//After routes/users/auth (line 111) here find user by token and return user
userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secret', function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('users', userSchema);

module.exports = { User};



