import { Text, type TextProps, StyleSheet } from 'react-native';
import { disenio } from '../temas/disenio';

interface Props extends TextProps { 
  tipo: 'principal' | 'secundaria'; 
};

export const Pantalla = ({children,tipo, ...rest}:Props) => {
  return (
    <Text style={tipo === 'principal' ? disenio.pantallaPrincipal : disenio.pantallaSecundaria} {...rest}>
        {children}
    </Text>
  )
}