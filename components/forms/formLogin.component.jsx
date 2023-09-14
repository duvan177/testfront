import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useUserStore } from "@/store/users.store";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setUserAuth = useUserStore((state) => state.setUserAuth);
  const router = useRouter();
  const onSubmit = (data) => {
    axios
      .get(`http://localhost:9090/api/ciudadanos/${data.cedula}`)
      .then((response) => {
        alert(`Bienvenido: ${response.data.Nombres}`);
        setUserAuth(response.data);
        router.push("/");
        // console.log(response);
      })
      .catch((error) => {
        alert(`Error al ingresar: ${data.cedula}`);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Controller
          name="cedula"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Cédula u otro documento de identidad"
              variant="outlined"
              fullWidth
              error={!!errors.cedula}
              helperText={errors.cedula ? "Campo requerido" : ""}
            />
          )}
        />
      </div>
      <div className="mb-4 justify-between flex flex-row">
        <Button type="submit" variant="contained" className="bg-black">
          Ingresar
        </Button>
        <Link href={"/auth/register"} className="">
          Registrarme
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
