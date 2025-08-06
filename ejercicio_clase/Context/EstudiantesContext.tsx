import { createContext } from "react";
import { Estudiante } from "../Modelos/Estudiantes";

export const estudianteContext = createContext({
    estudiantes: [] as Estudiante[],
    agregarEstudiante: (estudiante: Estudiante) => {},
})