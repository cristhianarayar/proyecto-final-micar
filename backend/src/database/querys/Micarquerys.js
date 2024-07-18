const { database } = require("../dbConfig");
const { encryptHashPassword } = require("../../util/util");
// const format = require('pg-format')

const registraPerfil = async (rut,nombre,apellido,edad,fono,email,direccion,region,ciudad,comuna,image) => {
    try{
        console.log('ya registre el login')
        const sql = "INSERT INTO perfil (id_per,per_rut,per_nom,per_ape,per_edad,per_fono,per_correo,per_direc,per_id_region,per_id_ciudad,per_id_comuna,per_url) values (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING*;";
        const values = [rut,nombre,apellido,parseInt(edad),parseInt(fono),email,direccion,parseInt(region),parseInt(ciudad),parseInt(comuna),image];
        const { rowCount } = await database.query(sql, values);  
        console.log(sql)
        console.log(values)
        console.log({rowCount})
        if(rowCount){
            console.log('ya registre el perfil')
            return { message: "El usuario ha sido registrado" };
        }else{
            console.log('ya no registre el perfil')
            const sql2 = "DELETE FROM login WHERE per_rut = $1 RETURNING*;";
            const values2 = [rut];
            const { rowCount2 } = await database.query(sql2, values2); 
            if(rowCount2){
                return { message: "Ha ocurrido un error al registrar el usuario"};
            }
        } 
    }catch (error) {
        throw error;
    }
}

const registraLogin = async (rut,password,image) => {
  try {
    passEncrypt = await encryptHashPassword(String(password));
    const sql = "INSERT INTO login (per_rut,lg_pass,lg_img) values ($1,$2,$3) RETURNING*;";
    const values = [rut, passEncrypt, image];
    const { rowCount } = await database.query(sql, values);
    if (rowCount) {
        return { message: "El usuario ha sido registrado se debe esperar segunda confirmación", code:200 };
    } else {
      return {
        message: "Hubo un problema al registrar usuario o el usuario ya existe, favor de intentar nuevamente",
        code: 404
      };
    }
  } catch (error) {
    throw error;
  }
};

const verificaCredencial = async (rut) => {

  try {

    const consulta = "SELECT * FROM login WHERE per_rut = $1";
    let values = [rut];
    const { rows } = await database.query(consulta, values);
    if (rows.length) {
      const user = rows[0];
      return user.lg_pass;
    } else {
      return {
        code: 404,
        message: "No se encontró ningún usuario con estas credenciales",
      };
    }
  } catch (error) {
    next(error);
  }
};

const mostrarUsuario = async (rut) => {
  try {
    const consulta = "SELECT * FROM perfil WHERE per_rut = $1";
    let values = [rut];
    const { rows } = await database.query(consulta, values);

    if (rows.length) {
      const user = rows[0];

      return user;
    } else {
      return { msg: "No existe el usuario" };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const mostrarRegion = async () => {
    try {
        const sql = "SELECT id_reg, region FROM region;"
        const { rows } = await database.query(sql) 

        console.log(rows)

        if(rows.length){
            
        }
    } catch (error) {
        throw error;
    }
}

const mostrarCiudad = async (id_reg) => {
    try {
        const sql = "SELECT id_ciudad, ciudad FROM ciudad WHERE id_reg = $1;"
        let value = [parseInt(id_reg)]
        const { rows } = await database.query(sql,value) 

        console.log(rows)

        if(rows.length){
            
        }
    } catch (error) {
        throw error;
    }
}

const mostrarComuna = async (id_ciudad) => {
    try {
        const sql = "SELECT id_comuna, comuna FROM comuna WHERE id_ciudad = $1;"
        let value = [parseInt(id_ciudad)]
        const { rows } = await database.query(sql,value) 

        console.log(rows)

        if(rows.length){
            
        }
    } catch (error) {
        throw error;
    }
}

const mostrarTiendaUser = async (rut) => {
    try {
      const consulta = "SELECT * FROM producto WHERE id_per_rut = $1";
      let values = [rut];
      const { rows } = await database.query(consulta, values);
  
      if (rows.length) {
        const user = rows[0];
  
        return user;
      } else {
        return { message: "No ha cargado productos este usuario",
            code: 201
         };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const mostrarTienda = async () => {
    try {
      const consulta = "SELECT * FROM producto";
      const { rows } = await database.query(consulta);
  
      if (rows.length) {
        const user = rows[0];
  
        return user;
      } else {
        return { message: "No existe productos cargados",
            code: 201
        };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

const queryMicar = { verificaCredencial, registraLogin, registraPerfil, mostrarUsuario, mostrarRegion,
    mostrarTiendaUser, mostrarCiudad, mostrarComuna, mostrarTienda };

module.exports = { queryMicar };