import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useEstudiante } from "../Provider/EstudianteProvider";
import { Estudiante } from "../Modelos/Estudiantes";

export default function EstudianteComponent() {

    const { estudiantes, agregarEstudiante } = useEstudiante();
    const [nombre, setNombre] = useState<string>('');

    function agregarEstudiantes(){
        
        let estudiante: Estudiante = {
            id: estudiantes.length + 1,
            nombre: nombre
        }
        agregarEstudiante(estudiante);

        Alert.alert('Estudiante agregado');
    }
 

    return (
        <View>
            <Text>Estudiantes</Text>
            {estudiantes.map((estudiante) => (
                <Text key={estudiante.id}>{estudiante.id} {estudiante.nombre}</Text>
            ))}
            <TextInput
                placeholder="Nombre del estudiante"
                value={nombre}
                onChangeText={setNombre}
            />
            <Button title="Agregar Estudiante" onPress={agregarEstudiantes} />
        </View>
    );
}