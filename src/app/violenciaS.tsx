import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const voltar = require('../img/voltar.png');

export default function ViolenciaSociologia() {
  
  const handleVoltar = () => {
    router.replace('../sociologia');
  };
  
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

        <TouchableOpacity style={styles.voltarButton} onPress={handleVoltar}>
          <Image source={voltar} style={styles.voltarImage} />
        </TouchableOpacity>

        {/* ScrollView para permitir rolagem */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          {/* Cards para cada item */}
          <View style={styles.card}>
            <Text style={styles.cardNumber}>1º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Heleieth Saffioti: </Text> 
              Pioneira na análise da opressão da mulher no Brasil. Articulou a relação entre o patriarcado (sistema de dominação masculina) e o capitalismo, mostrando como a violência é um mecanismo de controle para manter a mulher em posição subalterna.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>2º</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Sérgio Adorno: </Text> 
              A violência contra a mulher é um reflexo de uma sociabilidade violenta profundamente enraizada, onde hierarquias de gênero são mantidas pela força, em uma cultura que naturaliza a dominação masculina.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>3º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Patricia Hill Collins: </Text> 
              A violência não atinge todas as mulheres da mesma forma. A interseccionalidade analisa como opressões de gênero, raça e classe se cruzam, tornando mulheres negras e pobres, por exemplo, ainda mais vulneráveis.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>4º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Sueli Carneiro: </Text> 
              Fundadora do feminismo negro no Brasil, demonstra como a violência de gênero tem um recorte racial. A violência contra a mulher negra é agravada pelo racismo estrutural, que a coloca na base da pirâmide social.
            </Text>
          </View>

          
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
    marginTop: 10, 
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
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  // Estilos para os cards
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

  voltarButton: {
    position: 'absolute',
    top: 133,
    left: 17,
    padding: 10,
    zIndex: 2,
  },

  voltarImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  bottomSpacing: {
    height: 20, 
  },
});