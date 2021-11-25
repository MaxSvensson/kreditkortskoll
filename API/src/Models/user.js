const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    username:{
        type: String,
        required: true,
        trim:true,
        lowercase: true,
    },
    password:{
        required:true,
        type: String,
        minlength: 7,
        trim:true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    tokens:[{
        token:{
            type: String,
            required:true
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id.toString()}, 'kreditkollkorts')

    return token;
}


userSchema.static('findByCredentials',async(username, password)=>{
    const user = await User.findOne({username:username})
    if(!user){
        throw new Error('Unable to login');
    } 
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Unable to login');
    }

    return user;

})



const User = mongoose.model('User', userSchema)

module.exports = User;
