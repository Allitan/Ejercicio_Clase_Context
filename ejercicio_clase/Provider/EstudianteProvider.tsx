import { View, Text } from "react-native";
import React, { useContext, useState} from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { Estudiante } from "../Modelos/Estudiantes";
import { estudianteContext } from "../Context/EstudiantesContext";

export default function EstudianteProvider({ children }: Plantilla) {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  
  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  return (
    <estudianteContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </estudianteContext.Provider>
  );
}
