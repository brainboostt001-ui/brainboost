import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"
import { servicos } from '@/src/servicos';

const home2 = require('../../img/home2.png');

export default function PerfilProfessor() {

  const handleHomePress = () => {
    router.push('./homeP'); 
  };

  const logoutProfessor = async () => {
    const response = await servicos.logoutUsuario()
    if (!response.success) return
    router.replace('/loginP')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>

        <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
          <Image source={home2} style={styles.homeImage} />    
        </TouchableOpacity>

        <View style={styles.titulo}>
          <Text style={styles.text}>Professor</Text>
        </View>

        <View style={styles.profileContainer} >
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profileText}>👤</Text>
          </View>
        </View>  

        <Text>Professor1</Text>
        <Text>professor1@gmail.com</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Configuração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Histórico de redação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobre nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={logoutProfessor}>
          <Text style={styles.buttonText}>Fazer logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  background: {
    position: 'absolute',
    top: 0,
    left: -50, 
    right: -50, 
    height: 100, 
    backgroundColor: '#000428',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  titulo: {
    width: windowWidth * 0.5,
    maxWidth: 500,
    aspectRatio: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000428',
    marginTop: 40,
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 90, 
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 200,
    top: 30,
    right: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  brain:{
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
  },

  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
  },

  homeButton: {
    position: 'absolute',
    top: 7,
    right: 18,
    marginTop: 40,
    zIndex: 1,
    padding: 5, 
  },
  
  homeImage: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
    right: 10,
  },

  profileContainer: {
    bottom: 5,
    padding: 10,
    zIndex: 1, 
  },
  
  profilePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  
});