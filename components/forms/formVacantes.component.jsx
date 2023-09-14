import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const FormVacantesComponent = ({ servicioData, create }) => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Establecer los valores iniciales del formulario usando los datos del servicio
  useEffect(() => {
    if (servicioData) {
      Object.keys(servicioData).forEach((key) => {
        key !== "FechaPublicacion" && setValue(key, servicioData[key]);
      });
    }
  }, [servicioData, setValue]);

  const onSubmit = (data) => {
    if (create) {
      axios.post(`http://localhost:9090/api/vacantes`, data).then((res) => {
        reset();
        alert(`Vacante creada: ${data.Codigo}`);
      });
    } else {
      axios
        .put(`http://localhost:9090/api/vacantes/${data.Codigo}`, data)
        .then((res) => {
          alert(`Vacante actualizada: ${data.Codigo}`);
          reset();
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 space-y-4"
    >
      <Controller
        name="Codigo"
        control={control}
        disabled={!create}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Código"
            variant="outlined"
            fullWidth
            error={errors.Codigo}
            helperText={errors.Codigo ? "El código es requerido" : ""}
          />
        )}
      />
      <Controller
        name="Cargo"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Cargo"
            variant="outlined"
            error={errors.Cargo}
            helperText={errors.Cargo ? "El cargo es requerido" : ""}
            fullWidth
          />
        )}
      />
      <Controller
        name="Descripcion"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Descripción"
            variant="outlined"
            fullWidth
            multiline
            error={errors.Descripcion}
            helperText={errors.Descripcion ? "La descripción es requerida" : ""}
            rows={4}
          />
        )}
      />
      <Controller
        name="Salario"
        rules={{ required: true, min: 0, max: 9999999 }}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Salario"
            error={errors.Salario}
            helperText={errors.Salario ? "El salario es requerido" : ""}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
      {errors.Salario && errors.Salario.type === "min" && (
        <p className="text-red-500">El salario debe ser mayor a 0</p>
      )}
      {errors.Salario && errors.Salario.type === "max" && (
        <p className="text-red-500">El salario debe ser menor a 9999999</p>
      )}
      <Controller
        name="Empresa"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Empresa"
            variant="outlined"
            error={errors.Empresa}
            helperText={errors.Empresa ? "La empresa es requerida" : ""}
            fullWidth
          />
        )}
      />
      <Button type="submit" variant="contained" className="bg-black">
        Guardar
      </Button>
    </form>
  );
};

export default FormVacantesComponent;
