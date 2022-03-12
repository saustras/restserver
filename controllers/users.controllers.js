const {response, request} = require ('express');


const usuariosGet =(req= request, res= response) => {

    const {q} = req.query;

    res.json({
        msg:'peticion get a mi base de datos',
        q
    })
}

const usuariosPost =(req, res) => {

    const {nombre,id} = req.body;
    
    
    res.json({
        msg:'peticion post a mi base de datos',
        nombre,
        id
    })
}

const usuariosPut =(req, res) => {

    const  id  = req.params.id;

    res.json({
        msg:'peticion put a mi base de datos',
        id
    })
}

const usuariosDelete =(req, res) => {
    res.json({
        msg:'peticion delete a mi base de datos'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}

