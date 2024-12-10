import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export
    const disenio = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20,
        },
        fila: {
            flexDirection: 'row',
            justifyContent: "space-around",
            width: '100%',
            marginBottom: 20,
            paddingHorizontal: 10,
        },
        pantallaPrincipal: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'right',
            fontWeight: '300',
            width: '90%',
            fontSize: 50,
        },
        pantallaSecundaria: {
            fontSize: 50,
            textAlign: 'right',
            width: '90%',
        },
        boton: {
            width:80,
            textAlign: 'center',
            padding: 10,
            fontSize: 30,
            fontWeight: 300,
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: 8,
        }
    });