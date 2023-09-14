'use client'
import React, { useEffect } from 'react'
import CiudadanosTable from '@/components/tables/table.component'
import axios from 'axios'   
import Link from 'next/link';
import { Button } from '@mui/material';

const Admin = () => {
    const [ciudadanos, setCiudadanos] = React.useState([])
    useEffect(() => {
        axios.get('http://localhost:9090/api/ciudadanos').then(res => {
            setCiudadanos(res.data)
        }, [])
    }, [])
    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg mt-10">
        <h1 className="text-2xl font-bold mb-4">Ciudadanos registrado</h1>
        <h2 className="text-xl font-bold mb-4">Listado de ciudadanos</h2>
        <p className="text-gray-700 mb-4">A continuación se muestra el listado de ciudadanos registrados en el sistema</p>
        <div className='flex flex-row justify-between py-5'>

        <p className="text-gray-900 font-bold">Cantidad de ciudadanos registrados: {ciudadanos.length}</p>
        <Button
            variant="contained"
            className="bg-black mt-5 py-2"
            >
            <Link href="/">
                Regresar a inicio
            </Link>
        </Button>
            </div>
         <CiudadanosTable data={ciudadanos} />
      </div>
    );
};

export default Admin;