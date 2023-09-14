"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      axios
        .post("http://localhost:9090/api/ciudadanos", data)
        .then((response) => {
          alert(`Registrado con exito: ${data.Cedula}`);
          console.log(response);
        });
      reset();
    } catch (error) {
      alert(`Error al registrar: ${data.Cedula}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 space-y-4 shadow-md mt-5"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Registro de Candidatos
      </Typography>
      <Controller
        name="TipoDocumento"
        control={control}
        defaultValue="Cédula de Ciudadanía"
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Tipo de Documento</InputLabel>
            <Select {...field} label="Tipo de Documento">
              <MenuItem value="Cédula de Ciudadanía">
                Cédula de Ciudadanía
              </MenuItem>
              <MenuItem value="Cédula de Extranjería">
                Cédula de Extranjería
              </MenuItem>
              <MenuItem value="Pasaporte">Pasaporte</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="Cedula"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Cédula u otro documento de identidad"
            variant="outlined"
            fullWidth
            error={!!errors.Cedula}
            helperText={errors.Cedula ? "Campo requerido" : ""}
          />
        )}
      />

      <Controller
        name="Nombres"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombres"
            variant="outlined"
            fullWidth
            error={!!errors.Nombres}
            helperText={errors.Nombres ? "Campo requerido" : ""}
          />
        )}
      />

      <Controller
        name="Apellidos"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Apellidos"
            variant="outlined"
            fullWidth
            error={!!errors.Apellidos}
            helperText={errors.Apellidos ? "Campo requerido" : ""}
          />
        )}
      />

      <Controller
        name="FechaNacimiento"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Fecha de Nacimiento"
            variant="outlined"
            fullWidth
            type="date"
            error={!!errors.FechaNacimiento}
            helperText={errors.FechaNacimiento ? "Campo requerido" : ""}
          />
        )}
      />
      <Controller
        name="Profesion"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Profesion"
            variant="outlined"
            fullWidth
            error={!!errors.Profesion}
            helperText={errors.Profesion ? "Campo requerido" : ""}
          />
        )}
      />

      <Controller
        name="AspiracionSalarial"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Aspiración Salarial"
            variant="outlined"
            fullWidth
            error={!!errors.AspiracionSalarial}
            helperText={errors.AspiracionSalarial ? "Campo requerido" : ""}
          />
        )}
      />

      <Controller
        name="CorreoElectronico"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            error={!!errors.CorreoElectronico}
            helperText={errors.CorreoElectronico ? "Campo requerido" : ""}
          />
        )}
      />
      <div className="flex flex-grow justify-around">
        <Button type="submit" variant="contained" className="bg-black">
          Guardar
        </Button>
        <Link href={"/auth"} variant="contained" color="primary">
          Regresar a Inicio de Sesión
        </Link>
      </div>
    </form>
  );
};

export default Register;
