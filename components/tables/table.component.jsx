'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const CiudadanosTable = ({ data, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipo de Documento</TableCell>
            <TableCell>Cédula</TableCell>
            <TableCell>Nombres</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Fecha de Nacimiento</TableCell>
            <TableCell>Profesión</TableCell>
            <TableCell>Aspiración Salarial</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ciudadano, index) => (
            <TableRow key={index}>
              <TableCell>{ciudadano.TipoDocumento}</TableCell>
              <TableCell>{ciudadano.Cedula}</TableCell>
              <TableCell>{ciudadano.Nombres}</TableCell>
              <TableCell>{ciudadano.Apellidos}</TableCell>
              <TableCell>{ciudadano.FechaNacimiento}</TableCell>
              <TableCell>{ciudadano.Profesion}</TableCell>
              <TableCell>{ciudadano.AspiracionSalarial}</TableCell>
              <TableCell>{ciudadano.CorreoElectronico}</TableCell>
              <TableCell align='center' className='flex flex-row justify-around'>
                <Button variant="contained" className='bg-black mr-5' onClick={() => onEdit(ciudadano)}>
                  Editar
                </Button>
                <Button variant="contained" className='bg-black' onClick={() => onDelete(ciudadano)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CiudadanosTable;
