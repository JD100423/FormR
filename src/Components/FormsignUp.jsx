import { useState } from "react"
import { Button } from "@mui/material"
import { TextField } from "@mui/material"
import { Switch } from "@mui/material"
import { FormGroup } from "@mui/material"
import { FormControlLabel } from "@mui/material"


function FormSignUp ({handleSubmit}) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Deben ser al menos 4 caracteres'
        }
    })

    function validarNombre(nombre) {
        if(nombre.length >= 4) {
        return { 
            name: {
                error: false, message: ""
            },
         }     
    } else {
        return { name: {error: true, message: "Deben ser al menos 4 caracteres" }}
    }
    }

    const [errores, setErrores] = useState({
    lastName: {
        error: false,
        mensaje: "Debe ingresar su apellido"
    }
    })

    function validarApellido(apellido) {
    if(apellido.length >= 1) {
        return {
            lastName: {
                error: false,
                mensaje: ""
            },
        }
    } else {
        return {
            lastName: {
                error: true,
                mensaje: "Debe ingresar su apellido"
            }
        }
    }
    }

    const [errosm, setErrosm] = useState({
        email: {
            error: false,
            msg: "Debe ingresar un email valido"
        }
    })

    function validarEmail(correo){
        if(correo.length  >= 1){
            return{
                email:{
                    error: false,
                    msg: ""
                }
            }
        } else {
            return {
                email: {
                    error: true,
                    msg: "Debe ingresar un email valido"
                }
            }
        }
    }

    return <form onSubmit={(e) => {e.preventDefault()
    handleSubmit ({name, lastName, email, prom, nov})}}>
        <TextField 
        id="name" 
        label="Nombre" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message: ""}
        onBlur={(e) => {
            setErrors(
            validarNombre(e.target.value)
            )
        }}
         />

        <TextField 
        id="lastName" 
        label="Apellido" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        error={errores.lastName.error}
        helperText={errores.lastName.error ? errores.lastName.mensaje: ""}
        onBlur={(e) => {
            setErrores(validarApellido(e.target.value))
        }}
        />

        <TextField 
        id="email" 
        label="Correo Electronico" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        error={errosm.email.error}
        helperText={errosm.email.error ? errosm.email.msg: ""}
        onBlur={(e) => {
            setErrosm(validarEmail(e.target.value))
        }}
        />

        <FormGroup>
        <FormControlLabel control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)}/>} label="Promociones"/>
        <FormControlLabel control={ <Switch checked={nov} onChange={(e) => setNov(e.target.checked)}/>} label="Novedades"/>
        </FormGroup>
        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
}

export default FormSignUp