const {response, request} = require ('express');
const User = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = async(req= request, res= response) => {

    const {limit = 5, from=0} = req.query;
    const query = {estado:true}

    const [total,user] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(from)
            .limit(limit)
    ]);

    res.json({
        total,
        user
    });
}

const usuariosPost = async(req, res) => {
  
    const {username, email, password, rol} = req.body;
    const user = new User({username, email, password, rol});

    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    
    await user.save();
    
    res.json({
        msg:'peticion post a mi base de datos',
        user
    })
}

const usuariosPut = async(req, res) => {

    const { id } = req.params;
    const { _id, password, google, email, ...updated } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await User.findByIdAndUpdate( id, updated );

    res.json({
        msg:`updated values:`,
        updated
    });
}

const usuariosDelete = async(req, res) => {
    
    const {id}= req.params;

    const usuario = await User.findByIdAndUpdate(id,{estado:false});

    res.json(usuario)
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}

