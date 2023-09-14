'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import LoginForm from '@/components/forms/formLogin.component';
const Auth = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      alert(`Cédula: ${data.cedula}`);
    };
  
    return (
        <div className="max-w-sm mx-auto p-6 shadow-lg mt-10">
          <h1 className="text-2xl font-bold mb-4">Inicio de Sesión</h1>
            <LoginForm />
        </div>
      );
  };
  
  export default Auth;