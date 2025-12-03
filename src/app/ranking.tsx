import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const primeiro = require('../img/primeiro.png');
const segundo = require('../img/segundo.png');
const terceiro = require('../img/terceiro.png');

export default function Ranking() {
  
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
          <Text style={styles.brain}>Ranking</Text>
        </View>

        {/* ScrollView para permitir rolagem */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >

          {/* Container para as medalhas */}
          <View style={styles.medalhasContainer}>
            <View style={[styles.medalha, styles.segundoLugar]}>
              <Image source={segundo} style={styles.segundo} />
              <Text>User2</Text>
            </View>

            <View style={[styles.medalha, styles.primeiroLugar]}>
              <Image source={primeiro} style={styles.primeiro} />
              <Text>User1</Text>
            </View>

            <View style={[styles.medalha, styles.terceiroLugar]}>
              <Image source={terceiro} style={styles.terceiro} />
              <Text>User3</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>4º</Text>
            <Text style={styles.cardText}>User4</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>5º</Text>
            <Text style={styles.cardText}>User5</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>6º</Text>
            <Text style={styles.cardText}>User6</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>7º</Text>
            <Text style={styles.cardText}>User7</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>8º</Text>
            <Text style={styles.cardText}>User8</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>9º</Text>
            <Text style={styles.cardText}>User9</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>10º</Text>
            <Text style={styles.cardText}>User10</Text>
          </View>

          {/* Espaço extra no final para melhor rolagem */}
          <View style={styles.bottomSpacing} />
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
  
  // ScrollView styles
  scrollView: {
    width: '100%',
    flex: 1,
  },
  
  scrollViewContent: {
    paddingBottom: 20, // Espaço no final do scroll
  },
  
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, 
  },
  
  profileImage: {
    width: 30,
    height: 30,
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
 
  // Estilos para os cards
  card: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000428',
    marginRight: 15,
  },
  
  cardText: {
    fontSize: 16,
    color: '#333',
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

  
  medalhasContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },

  medalha: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 10,
  },

  primeiroLugar: {
    marginBottom: 30, 
  },

  segundoLugar: {
    
  },

  terceiroLugar: {
    
  },

  primeiro: {
    
  },

  segundo: {
    
  },

  terceiro: {
    
  },

  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  profileText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  bottomSpacing: {
    height: 20, 
  },
});