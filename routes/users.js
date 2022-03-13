const {Router} = require('express');
const { check } = require('express-validator');

const { ValidRole, emailExists, usersExistsForId} = require('../helpers/dbValidators');
const { validFields } = require('../middleware/valid-fields');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/users.controllers');

const router = Router()


router.get('/', usuariosGet);

router.put('/:id',[
    check('id','not a id mongodb').isMongoId(),
    check('id').custom(usersExistsForId),
    check('rol').custom( ValidRole),
    validFields

], usuariosPut);

router.post('/',[
    check('password','min 6 letter').isLength({min:6}),
    check('username',' username is required').not().isEmpty(),
    check('email','email not is valid').isEmail(),
    check('email').custom( emailExists),
    //body('role','not a valid role').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( ValidRole),
    validFields
]
, usuariosPost);

router.delete('/:id',[
    check('id').custom(usersExistsForId),
    check('id','not a id mongodb').isMongoId(),
    validFields
] , usuariosDelete);




module.exports= router;