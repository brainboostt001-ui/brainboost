import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

export default function AtividadeProfessor() {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <Link href="./perfilP" asChild>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.profilePlaceholder}>
              <Text style={styles.profileText}>👤</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.titulo}>
          <Text style={styles.text}>Professor</Text>
        </View>

        {/* Título Atividades */}
        <View style={styles.brainContainer}>
          <Text style={styles.brain}>Atividades</Text>
        </View>
       
        {/* Formulário */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Título da atividade</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            placeholderTextColor="#999"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Conteúdo</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Conteúdo"
            placeholderTextColor="#999"
            autoCapitalize="none"
            multiline
          />
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
  },
  profileContainer: {
    position: 'absolute',
    top: 7,
    right: 18,
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
  brainContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  brain: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center', 
  },
  formSection: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    color: '#000428', 
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});