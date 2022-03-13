const Rol = require('../models/rol');
const User = require('../models/usuario');

const ValidRole = async(rol='')=>{
    const existeRol = await Rol.findOne({rol})
    if (!existeRol){
        throw new Error(`the role ${rol} does not exist in the database`)
    }
}

const emailExists = async(email='')=>{
    const existeEmail = await User.findOne({email});
    if(existeEmail){
        throw new Error(`the email: ${email} already exists`)
        }
    }

const usersExistsForId = async(id='')=>{
    const existeUsuario = await User.findById(id)
    if(!existeUsuario){
        throw new Error(`not exists user with id: ${id}`)
        }
    }

module.exports ={
    ValidRole,
    emailExists,
    usersExistsForId
}