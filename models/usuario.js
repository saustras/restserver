const {Schema,model} = require('mongoose')



const userSchema = Schema({
    username:{
        type: String,
        required: [true,'name is required']
    },
    email:{
        type: String,
        required: [true,'name is required'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'password is required'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: [true],
    },
    estado:{
        type: Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    }

});

userSchema.methods.toJSON= function(){
    const { __v,password, ...user } = this.toObject();
    return user
}



module.exports = model('User',userSchema);




