import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { disenio } from './src/temas/disenio';


export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,Operadores,
         operaciones,resultado  } = useCalculadora();

  return (
  
    <View style={disenio.container}>    
      <Pantalla numberOfLines={1} tipo='principal' adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tipo='secundaria'> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tipo='secundaria'>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

      <View style={disenio.fila}>
        <BotonOperacion label='C' tipo="arriba" onPress={clean}></BotonOperacion>
        <BotonOperacion label='+/-' tipo="arriba" onPress={cambiarSigno}></BotonOperacion>
        <BotonOperacion label='del' tipo="arriba" onPress={borrarDigito}></BotonOperacion>
        <BotonOperacion label='/' tipo="derecha" onPress={() => operaciones(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={disenio.fila}>
        <BotonOperacion label='7' tipo="centro" onPress={() => construirNumero('7')}></BotonOperacion>
        <BotonOperacion label='8' tipo="centro" onPress={() => construirNumero('8')}></BotonOperacion>
        <BotonOperacion label='9' tipo="centro" onPress={() => construirNumero('9')}></BotonOperacion>
        <BotonOperacion label='x' tipo="derecha" onPress={() => operaciones(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={disenio.fila}>
        <BotonOperacion label='4' tipo="centro" onPress={() => construirNumero('4')}></BotonOperacion>
        <BotonOperacion label='5' tipo="centro" onPress={() => construirNumero('5')}></BotonOperacion>
        <BotonOperacion label='6' tipo="centro" onPress={() => construirNumero('6')}></BotonOperacion>
        <BotonOperacion label='-' tipo="derecha" onPress={() => operaciones(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={disenio.fila}>
        <BotonOperacion label='1' tipo="centro" onPress={() => construirNumero('1')}></BotonOperacion>
        <BotonOperacion label='2' tipo="centro" onPress={() => construirNumero('2')}></BotonOperacion>
        <BotonOperacion label='3' tipo="centro" onPress={() => construirNumero('3')}></BotonOperacion>
        <BotonOperacion label='+' tipo="derecha" onPress={() => operaciones(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={disenio.fila}>
        <BotonOperacion label='0' width={180} tipo="centro" onPress={() => construirNumero('0')}></BotonOperacion>
        <BotonOperacion label='.' tipo="centro" onPress={() => construirNumero('.')}></BotonOperacion>
        <BotonOperacion label='=' tipo="derecha" onPress={resultado}></BotonOperacion>
    </View>

    </View>


  );
}

