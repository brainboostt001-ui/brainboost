import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const voltar = require('../img/voltar.png');

export default function SociaisHistoria() {
  
  const handleVoltar = () => {
    router.replace('../historia');
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

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.pageTitle}>Movimentos Sociais</Text>
            <Text style={styles.pageSubtitle}>Lutas por direitos na história</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>1º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Revolução Haitiana (1791-1804): </Text> 
              Única rebelião de escravizados bem-sucedida que levou à criação de um Estado independente. Representa a luta radical por liberdade e desafiou as estruturas escravistas do mundo colonial, inspirando movimentos abolicionistas globais.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>2º</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Revolta da Vacina (1904, Rio de Janeiro): </Text> 
              Motim popular contra a campanha de vacinação obrigatória imposta pelo governo. Ilustra a resistência à intervenção autoritária do Estado na vida privada e a insatisfação com condições de vida precárias na capital.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>3º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Movimento dos Direitos Civis nos EUA (décadas de 1950-1960): </Text> 
              Luta não violenta contra a segregação racial e pela conquista de direitos políticos. Lideranças como Martin Luther King Jr. usaram protestos e desobediência civil, resultando em leis históricas como o Civil Rights Act de 1964.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardNumber}>4º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Primavera Feminista (década de 1960): </Text> 
              Segunda onda do feminismo que trouxe pautas como liberdade sexual, direitos reprodutivos e igualdade no mercado de trabalho. O lema "o pessoal é político" transformou questões privadas em debate público.
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
  
  scrollView: {
    width: '100%',
    flex: 1,
    marginTop: 10, 
  },
  
  scrollViewContent: {
    paddingBottom: 20,
  },
  
  headerContainer: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000428',
    textAlign: 'center',
    marginBottom: 5,
  },
  
  pageSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
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
  
  card: {
    backgroundColor: '#f8f9fa',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#000428',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    fontSize: 15,
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