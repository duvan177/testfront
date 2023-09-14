"use client";
import React, { use, useEffect } from "react";
import VacanteCard from "@/components/cards/VacanteCard.components";
import AppHeader from "@/components/headers/appBar.component";
import axios from "axios";
import { Button } from "@mui/material";
import Link from "next/link";
import { useUserStore } from "@/store/users.store";

export default function Home() {
  const [vacantes, setVacantes] = React.useState([]);
  const [userAuth, setUserAuth] = React.useState([]);
  const user = useUserStore((state) => state.userAuth);
  const getVacantes = async () => {
    const res = await axios.get("http://localhost:9090/api/vacantes");
    setVacantes(res.data);
  };

  useEffect(() => {
    getVacantes();
  }, []);
  useEffect(() => {
    setUserAuth(user);
  }, [user]);
  return (
    <>
      <AppHeader />
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex flex-row justify-between mb-10">
          <h1 className="text-3xl font-bold mb-4">Vacantes Disponibles</h1>
          {userAuth?.Cedula == "123123" ? (
            <Button variant="contained" className="bg-black mt-5 py-2">
              <Link href="/vacantesCreate">Crear Vacante</Link>
            </Button>
          ) : (
            <></>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {vacantes.map((vacante) => (
            <VacanteCard
            getVacantes={getVacantes}
              key={vacante.Codigo}
              codigo={vacante.Codigo}
              titulo={vacante.Cargo}
              descripcion={vacante.Descripcion}
              salario={vacante.Salario}
              fecha={vacante.FechaPublicacion}
            />
          ))}
        </div>
      </div>
    </>
  );
}
