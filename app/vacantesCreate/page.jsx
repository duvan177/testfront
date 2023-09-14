"use client";
import React from "react";
import FormVacantesComponent from "@/components/forms/formVacantes.component";
import { Button } from "@mui/material";
const VacantesCreate = () => {
  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg mt-10">
        <div className="flex flex-row justify-between">

      <h1 className="text-2xl font-bold mb-4">Crear Vacante</h1>
      <Button variant="contained" className="bg-black mt-5 py-2">
        <a href="/">Regresar a vacantes</a>
        </Button>

        </div>
        <FormVacantesComponent  create={true} />
    </div> 
  );
};
export default VacantesCreate;
