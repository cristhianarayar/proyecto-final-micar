const { response, query } = require('express')
const  {queryMicar} = require ('../database/querys/Micarquerys')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const postCtrLogin = async (req,res,next) => {
    try {
        const token = req.token
        console.log(token)
        res.send({token})

    } catch (error) {
         console.log(error)
         res.status(error.code || 404).send(error)
    }
 
}

const postCtrRegistro = async (req,res,next) => {

    try {
    
    const {rut,nombre,apellido,edad,fono,email,direccion,region,ciudad,comuna,password,image} = req.body
    const responseLogin = await queryMicar.registraLogin(rut,password,image)
    if (responseLogin.code == 200){
        const response = await queryMicar.registraPerfil(rut,nombre,apellido,edad,fono,email,direccion,region,ciudad,comuna,image)
    }
    res.send(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)
    }
    
}

const getCtrPerfil = async (req,res,next) => {
    try {
        
        const  {rut}  = req.user
        const user = await queryMicar.mostrarUsuario(rut)
        res.send ([user])

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)
    }
    
}

const getCtrlTienda = async (req,res,next) => {
    try {
        const mostrarProd = await queryMicar.mostrarTienda()
        res.send ([mostrarProd])
    } catch(error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error) 
    }
}

const getCtrlTiendaUser = async (req,res,next) => {
    try {
        const {rut} = req.query 
        const prodUser = await queryMicar.mostrarTiendaUser(rut)
        if(prodUser.code == 201){
            res.status(201).send([prodUser])
        }else{
            res.send([prodUser])
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)         
    }
}

module.exports = {postCtrLogin,postCtrRegistro,getCtrPerfil, getCtrlTienda, getCtrlTiendaUser}