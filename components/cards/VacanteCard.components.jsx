import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import { useUserStore } from "@/store/users.store";
import axios from "axios";
import FormVacantesComponent from "@/components/forms/formVacantes.component";
import { useRouter } from "next/navigation";
const VacanteCard = ({ codigo, titulo, descripcion, salario, fecha , getVacantes}) => {
  const user = useUserStore((state) => state.userAuth);
  const [servicioData, setServicioData] = useState({});
  const [open, setOpen] = useState(false);
  const router =  useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAplicar = () => {
    console.log(user);
    if (Object.keys(user).length === 0) {
      alert("¡Debes iniciar sesión para aplicar a esta vacante!");
      router.push("/auth");
      return;
    }
    // Agrega la lógica para aplicar a la vacante aquí
    alert("¡Has aplicado a esta vacante!");
  };
  const handleEdit = (codigo) => () => {
    // Agrega la lógica para editar la vacante aquí
    axios.get(`http://localhost:9090/api/vacantes/${codigo}`).then((res) => {
      setServicioData(res.data);
      handleOpen();
     
    });
  };
  const handleDelete = (codigo) => () => {
    // Agrega la lógica para eliminar la vacante aquí
    axios.delete(`http://localhost:9090/api/vacantes/${codigo}`).then((res) => {
      alert(`Vacante eliminada: ${codigo}`);
      getVacantes()
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out">
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="text-gray-700 mb-4">{descripcion}</p>
      <p className="text-gray-900 font-bold">Salario Ofrecido: ${salario}</p>
      <p className="text-gray-700">Fecha de Publicación: {fecha}</p>
      <Button
        variant="contained"
        className="bg-black mt-5 py-2"
        onClick={handleAplicar}
      >
        Aplicar
      </Button>
      {user?.Cedula == "123123" ? (
        <>
         <Button
          variant="contained"
          className="bg-slate-800 mt-5 py-2 ml-5"
          onClick={handleEdit(codigo)}
          >
          Editar
        </Button>
        <Button
          variant="contained"
          className="bg-red-900 mt-5 py-2 ml-5"
          onClick={handleDelete(codigo)}
          >
          Eliminar
        </Button>
          </>
      ) : (
        <></>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <FormVacantesComponent servicioData={servicioData} />
        </div>
      </Modal>
    </div>
  );
};

export default VacanteCard;
