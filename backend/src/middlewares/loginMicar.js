require('dotenv').config()

const jwt = require('jsonwebtoken');
const { verifyPasswordEncrypt, encryptHashPassword } = require('../util/util');
const { queryMicar } = require('../database/querys/Micarquerys')


const validateLoginMiddleware = async (req, res, next) => {
    try {
        const { rut, password } = req.body
        const passwordHash = await queryMicar.verificaCredencial(rut)
        const match = await verifyPasswordEncrypt(String(password), passwordHash)
        
        if (match) {

            const token = jwt.sign({ rut }, process.env.JWT_JOB) 
            req.token = token
            next()

        }else if (!match){
            res.status(403).json({ code: 403, message: "No se encontró ningún usuario con estas credenciales" })
        }
        
    } catch (error) {
        res.status(500).json({code: 404,message:'No se encontró ningún usuario con estas credenciales'})
    }


}

module.exports = {
    validateLoginMiddleware
}