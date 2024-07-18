const { postCtrLogin,postCtrRegistro,getCtrPerfil, getCtrlTienda, getCtrlTiendaUser } = require ("../../controller/controllerMicar")
const { validateLoginMiddleware } = require ('../../middlewares/loginMicar') 
const { authMicar } = require ('../../middlewares/authMicar')
const fileroute = require('express').Router()


fileroute.get("/",getCtrlTienda)
fileroute.post("/login",validateLoginMiddleware,postCtrLogin)
fileroute.post("/crear-recuperar",postCtrRegistro)
fileroute.get("/mi-perfil",authMicar,getCtrPerfil)
fileroute.get("/actualizar",getCtrlTiendaUser)


module.exports = fileroute