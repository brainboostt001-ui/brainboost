import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');


export default function HomeAluno() {
  
  
  const redacoes = [
    { id: 1, titulo: "REDAÇÃO 01", nota: "000" },
    { id: 2, titulo: "REDAÇÃO 02", nota: "000" },
    { id: 3, titulo: "REDAÇÃO 03", nota: "000" },
    { id: 4, titulo: "REDAÇÃO 04", nota: "000" },
  ];

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

        
        <View style={styles.tabelaContainer}>
          <Text style={styles.tabelaTitulo}>MINHAS REDAÇÕES</Text>
          
          {redacoes.map((redacao) => (
            <View key={redacao.id} style={styles.linhaTabela}>
              <Text style={styles.colunaTitulo}>{redacao.titulo}</Text>
              <Text style={styles.colunaNota}>{redacao.nota}</Text>
            </View>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.botoesContainer}>

          <Link href="../redacao" asChild> 
          <TouchableOpacity style={styles.buttonR}>
            <Text style={styles.textoR}>Corrigir Redação</Text>
          </TouchableOpacity>
         </Link> 

         <Link href="../repertorio" asChild> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Repertórios</Text>
          </TouchableOpacity>
         </Link> 

         <Link href="../minhaE" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Minha Evolução</Text>
          </TouchableOpacity>
         </Link>

        <Link href="../flashcards" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FlashCards</Text>
          </TouchableOpacity>
        </Link>  

         <Link href="../ranking" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ranking</Text>
          </TouchableOpacity>
         </Link> 

        </ScrollView>
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
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  tabelaContainer: {
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tabelaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000428',
  },
  linhaTabela: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  colunaTitulo: {
    fontSize: 16,
    fontWeight: '500',
  },
  colunaNota: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000428',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 90, 
  },
  botoesContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 340,
    margin: 10,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brain: {
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  homeContainer:{
    position: 'absolute',
    top: 10,
    left: 30,
    marginTop: 40,
    zIndex: 1, 
  },

  homeImage:{
    width: 30,
    height: 30,
  },

  buttonR:{
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: 200,
    marginBottom: 50,
    borderColor: '#000428',
    color: '#000428',
    borderWidth: 2,
  },

  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
  },

  textoR:{
    color: '#000428',
    fontSize: 18,
    fontWeight: 'bold',
  },
});