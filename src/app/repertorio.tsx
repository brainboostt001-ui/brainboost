import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton} from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function Repertório() {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <Link href="../perfilA" asChild>
          <TouchableOpacity style={styles.profileContainer} >
            <View style={styles.profilePlaceholder}>
              <Text style={styles.profileText}>👤</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.repertorio}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>Repertórios</Text>
        </View>

        
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>

           <Link href="../filmesS" asChild> 
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filmes/Séries</Text>
            </TouchableOpacity>
           </Link>

          <Link href="../literaturaB" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Literatura</Text>
            </TouchableOpacity>
          </Link>
          </View>

         
          <View style={styles.buttonRow}>
            
           <Link href="../historia" asChild> 
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>História</Text>
            </TouchableOpacity>
         </Link>   

          <Link href="../musicas" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Músicas</Text>
            </TouchableOpacity>
          </Link> 
          </View>

          <View style={styles.buttonRow}>
            <Link href="../podcasts" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Podcasts</Text>
              </TouchableOpacity>
            </Link>

            <Link href="../jornais" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Jornais</Text>
              </TouchableOpacity>
            </Link> 
          </View>

          
          <View style={styles.buttonRow}>

           <Link href="/filosofia" asChild> 
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filosofia</Text>
            </TouchableOpacity>
           </Link> 
 
           <Link href="/sociologia" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sociologia</Text>
            </TouchableOpacity>
           </Link>


          </View>  
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
  repertorio: {
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
    marginTop: 30,
    width: 150,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
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
    width: 150,
    marginHorizontal: 10,
  },
});