import { Pressable, Text, StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics'
import { disenio } from '../temas/disenio';
import { color } from "../temas/colors";

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
    tipo?: 'arriba' | 'derecha' | 'centro';
}

export const BotonOperacion = ({label, width=80, onPress, tipo}:Props) => {
    const getBackgroundColor = () => {
        switch (tipo) {
            case 'arriba':
                return color.verdeAmarillento;
            case 'derecha':
                return color.grisClaro;
            case 'centro':
                return color.naranja;
            default:
                return color.amarillo;
        }
    };

    const accion = (() => {
        Haptics.selectionAsync();
        if (onPress)onPress()
        console.log('Cuidado que vibroooo');
      })
    

    return (
        <Pressable>
            <Text
                style={[disenio.boton, { width, backgroundColor: getBackgroundColor() }]}
                onPress={accion}>{label}</Text>
        </Pressable>
    );
};