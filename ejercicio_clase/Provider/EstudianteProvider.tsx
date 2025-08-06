import { View, Text } from "react-native";
import React, { use, useContext, useState, useEffect} from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { Estudiante } from "../Modelos/Estudiantes";
import { estudianteContext } from "../Context/EstudiantesContext";

export default function EstudianteProvider({ children }: Plantilla) {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([

    { id: 1, nombre: ' Estudiante 1' },
    { id: 2, nombre: ' Estudiante 2' },
    { id: 3, nombre: ' Estudiante 3' },
    { id: 4, nombre: ' Estudiante 4' },
    { id: 5, nombre: ' Estudiante 5' },
    { id: 6, nombre: ' Estudiante 6' },
    { id: 7, nombre: ' Estudiante 7' },
    { id: 8, nombre: ' Estudiante 8' },
    { id: 9, nombre: ' Estudiante 9' },
    { id: 10, nombre: ' Estudiante 10' }
  
  ]);

  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  useEffect(() => {
    const tiempo = setTimeout(() => {
        const nuevoEstudiante = {
            id: estudiantes.length + 1,
            nombre: `Estudiante nuevo ${estudiantes.length + 1}`
        }
        
        setEstudiantes(prevEstudiantes => [...prevEstudiantes, nuevoEstudiante]);
    }, 5000);

    return () => clearTimeout(tiempo);
  }, [])

  return (
    <estudianteContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </estudianteContext.Provider>
  );
}

export function useEstudiante() {
    return useContext(estudianteContext);
}
