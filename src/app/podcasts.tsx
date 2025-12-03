import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const voltar = require('../img/voltar.png');

export default function Podcasts() {
  
  const handleVoltar = () => {
    router.replace('/repertorio');
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <TouchableOpacity style={styles.profileContainer} >
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profileText}>👤</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.titulo}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>Podcasts</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>

           <Link href="../politicaP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Análise Política e Social</Text>
            </TouchableOpacity>
           </Link> 

           <Link href="../raciaisP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Questões Raciais</Text>
            </TouchableOpacity>
          </Link>

          </View>

          <View style={styles.buttonRow}>

           <Link href="../saudeP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ciência e Saúde</Text>
            </TouchableOpacity>
           </Link> 


           <Link href="../educacaoP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Educação e Pensamento Crítico</Text>
            </TouchableOpacity>
           </Link> 
          
          </View>

          <View style={styles.buttonRow}>
           
           <Link href="../investigativo" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Jornalismo Investigativo</Text>
            </TouchableOpacity>
           </Link> 

           <Link href="../economiaP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Economia e Mercado de Trabalho</Text>
            </TouchableOpacity>
           </Link> 
          
          </View>

          <View style={styles.buttonRow}>
           
           <Link href="../filosofiaP" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filosofia e Reflexão</Text>
            </TouchableOpacity>
           </Link> 

           <TouchableOpacity style={styles.emptyButton}>
           </TouchableOpacity>
          
          </View>

          {/* Seta Voltar */}
          <TouchableOpacity style={styles.voltarButton} onPress={handleVoltar}>
            <Image source={voltar} style={styles.voltarImage} />
          </TouchableOpacity>

        </View>

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
  
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, 
  },
  
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
 
  button: {
    backgroundColor: '#000428',
    height: 53,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 30,
    width: 180,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center",
    lineHeight: 16,
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

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  
  buttonRow: {
    flexDirection: 'row',        
    justifyContent: 'center',      
    width: '100%',                 
  },

  emptyButton: {
    width: 180,
    marginHorizontal: 10,
  },

  voltarButton: {
    marginTop: 30,
    padding: 10,
  },

  voltarImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});