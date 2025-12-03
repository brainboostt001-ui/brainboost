import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function DesigualdadeMusica() {
  
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

        <View style={styles.titulo}>
          <Text style={styles.textA}>Aluno</Text>
        </View>

        {/* Cards para cada item */}
        <View style={styles.card}>
          <Text style={styles.cardNumber}>1º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Construção" (Chico Buarque):</Text> 
            Metáfora sobre o trabalhador brasileiro explorado e acidentado.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>2º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Cálice" (Chico Buarque & Gilberto Gil):</Text> 
            Protesto contra a censura na ditadura.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>3º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Apesar de Você" (Chico Buarque):</Text> 
             Hino de resistência democrática.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>4º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Comida" (Titãs):</Text> 
            Crítica ao consumismo e valorização do básico.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>5º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Família" (Titãs):</Text> 
            Sátira à estrutura familiar tradicional.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>6º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Inútil" (Ultraje a Rigor):</Text> 
            Crítica à apatia política da juventude.
          </Text>
        </View>


        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>7º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Brasil" (Cazuza):</Text> 
            Visão desiludida do país "que sonha com a volta do irmão do Henfil".
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>8º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Tempo Perdido" (Legião Urbana):</Text> 
            Reflexão sobre as escolhas e o vazio existencial.
          </Text>
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
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  
  card: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#000428',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000428',
    marginRight: 10,
  },
  
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  
  cardTitle: {
    fontWeight: 'bold',
    color: '#000428',
  },
  
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },

  textA: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
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
});