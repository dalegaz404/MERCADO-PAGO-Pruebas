import React, {} from 'react'
import { Formik, FieldArray, Field } from "formik";
import {TextField, Button, Grid } from '@mui/material';
import * as Yup from 'yup';
import axios from 'axios'


//Aqui se renderiza el formulario para crear un usuario nuevo 

export default function FormCrearUsuario() {

const requiredString = Yup.string().required("Campo requerido");

// Al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 

const initialValues = {
      nombreYApellido: "",
      eMail: "",
      direccion: "",
      telefono: "",
      contraseña: ""
}

  return (
  <><Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center">
    <h2>Registro nuevo usuario </h2>
    <Formik 
    initialValues={initialValues}

    validationSchema={Yup.object().shape({
    nombreYApellido: requiredString.min(1, "Debes ingresar al menos 3 caracteres"),
    eMail: Yup.string().email('Debes escribir un correo válido').required("Campo requerido"),
    direccion: requiredString.min(5, "Debes ingresar al menos 5 caracteres"),
    contraseña: requiredString
    .matches(regexPassword, 'Debe tener al menos 8 caracteres, una letra minúscula, mayúscula, un número y un carácter especial'),
    telefono:  Yup.number()
              .test("longitud", "el número debe tener una longitud de 5 dígitos", (value)=>{
                if(value){
                    const numberString = value.toString();
                    return numberString.length === 5;
                }
                return false;
              })
              .required("Campo requerido"),

  })}

    onSubmit={async (values, {resetForm})=>{
      var confirmar = window.confirm('Se enviará: '+JSON.stringify(values))
      if(confirmar){
        try{
        await axios.post('http://localhost:3001/usuario', values)
        alert("Usuario creado exitosamente");
        resetForm();
        }catch(err){
          alert(err.message)
        }
      }
      
    }}>

    {({handleSubmit, handleChange, values, errors, touched})=>(
      <form onSubmit={handleSubmit}>
        <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems="center"
         rowSpacing = {2}>

          <Grid item>
          <TextField 
            id="nombreYApellido"
            name="nombreYApellido"
            label="Nombre y apellido:"
            value={values.nombreYApellido}
            onChange={handleChange}
            error={touched.nombreproducto && Boolean(errors.nombreYApellido)}
            helperText={touched.nombreYApellido && errors.nombreYApellido}
            />
          </Grid>     

          <Grid item>
        <TextField
          id="eMail"
          name="eMail"
          label="Correo electrónico"
          value={values.eMail}
          onChange={handleChange}
          error={touched.eMail && Boolean(errors.eMail)}
          helperText={touched.eMail && errors.eMail}
          />
        </Grid>

        <Grid item>
          <TextField
            id="direccion"
            name="direccion"
            label='Dirección'
            value={values.direccion}
            onChange={handleChange}
            error={touched.direccion && Boolean(errors.direccion)}
            helperText={touched.direccion && errors.direccion}
            />
         </Grid> 

           <Grid item>
            <TextField
            id='telefono'
            name="telefono"
            label='Teléfono'
            value={values.telefono}
            onChange={handleChange}
            error={touched.telefono && Boolean(errors.telefono)}
            helperText={touched.telefono && errors.telefono}
            />
          </Grid>

          <Grid item>
          <TextField 
            id="contraseña"
            name="contraseña"
            label="Contraseña"
            value={values.contraseña}
            onChange={handleChange}
            error={touched.contraseña && Boolean(errors.contraseña)}
            helperText={touched.contraseña && errors.contraseña}
            />
          </Grid>
          

                 
                <Button sx={{backgroundColor: '#ff8a65',}} variant='contained' type="submit">Enviar</Button>
                </Grid>
      </form>
    )}  
    </Formik>
    </Grid>
  </>
)
}