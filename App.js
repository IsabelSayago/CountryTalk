import { StatusBar } from "expo-status-bar";
import React, { useState, } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity, 
} from "react-native";



import {ingles,español} from "./banderas";


//-----------------------------------FUNCIONES Y STATES--------------------------
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  

  let openImagePicker = async () => {
    let permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync;

    if (permissionResult.granted === false) {
      alert("El permiso para acceder a la camara es requerido");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    return pickerResult;
  };

  const idiomas = [

    { id: 1, name: 'Ingles', idioma:{ingles} },
    { id: 2, name: 'Español',idioma:{español} },
   // { id: 3, name: 'Frances',idioma:{frances} },
   // { id: 4, name: 'Aleman',idioma:{aleman} },
    //{ id: 5, name: 'Chino',idioma:{chino} },
    //{ id: 6, name: 'Portugues', idioma:{portugues}},
   // { id: 7, name: 'Ruso',idioma:{ruso} },
   // { id: 8, name: 'Italiano',idioma:{italiano} },
   // { id: 9, name: 'Indio',idioma:{indio} },
    //{ id: 10, name: 'Holandes',idioma:{holandes}},
  ];

//----------------------------------APP--------------------------------------

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🉐 CountryTalk 🉑 </Text>
      <StatusBar style="auto" />
     
      <TouchableOpacity style={styles.buttonRed} onPress={openImagePicker}>
        <Text style={styles.buttonText}>📷 EDITAR FOTO </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBlue}
        onPress={() => alert("Editar Usuario")}
      >
        <Text style={styles.buttonText}>📰 EDITAR PERFIL DE USUARIO </Text>
      </TouchableOpacity>
      <View>
        <Image
          source={{
            uri:selectedImage !== null? selectedImage.localUri    : "http://picsum.photos/100/100", }}
         
          style={styles.image}
        />
      </View>
      <SafeAreaView>

      <View style={styles.vistaBandera}>
      <Image source= {ingles}  style={styles.bandera} />
      <Image source= {ingles}  style={styles.bandera} />
      <Image source= {ingles}  style={styles.bandera} />
        <Image source= {español}  style={styles.bandera} />
        <Image source= {español}  style={styles.bandera} />
      </View>


      <Text style={styles.textoIdioma}>ELIJA IDIOMA NATIVO</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="ELEGIR IDIOMA NATIVO"
      />
      <Text style={styles.textoIdioma}>ELIJA IDIOMA DE DESTINO</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="ELEGIR IDIOMA DE DESTINO"
        keyboardType="numeric"
      />
    </SafeAreaView>

    </View>
  );
}

//----------------------------------ESTILOS-----------------------------------

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#ffb",
    alignItems: "center",
    justifyContent: "top",
    width: "100%",
  },
  text: {
    // perfil de usuario texto
    padding: 20,
    fontSize: 30,
    color: "black",
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
    textAlign: 'center', 
    fontWeight: 'bold',
  },

  buttonRed: {
    // boton rojo
    backgroundColor: "red",
    marginTop: 50,
    borderRadius: 50,
    padding: 10,
  },

  buttonBlue: {
    // boton azul
    backgroundColor: "blue",
    marginTop: 50,
    borderRadius: 50,
    padding: 10,
  },

  buttonText: {
    //boton azul texto
    color: "white",
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 30,
  },

  input: {
    marginTop: 20,
    height: 30,
    margin: 12,
    padding:10,
    borderWidth: 2,
    backgroundColor: "white",
    textAlign: 'center', 
    fontWeight: 'bold',
    
  },
  textoIdioma:{
    marginTop: 0,
    height: 0,
    margin: 0,
    padding:10,
    textAlign: 'center', 
    fontWeight: 'bold',

  },
  bandera:{
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 30,
    marginLeft:5,
   
  },
  vistaBandera:{
    flexDirection: "row",
    marginTop: 5,
  }

});
