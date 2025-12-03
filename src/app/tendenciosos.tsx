import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const voltar = require('../img/voltar.png');

export default function JornaisTendenciosos() {
  
  const handleVoltar = () => {
    router.replace('../jornais');
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

        {/* Cards para cada item */}
        <View style={styles.card}>
          <Text style={styles.cardNumber}>1º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>Fox News (Portal) & Wall Street Journal (Editorial - EUA):</Text> 
             Embora sejam veículos diferentes, ambos pertencem à família Murdoch e possuem linhas editoriais conservadoras claras. A Fox é acusada de jornalismo opinativo, enquanto o WSJ mantém reportagens sérias, mas com editoriais fortemente à direita.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>2º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>The Guardian (Reino Unido):</Text> 
            Tabloide de massa com linguagem extremamente popular e manchetes agressivas. Conhecido por sua página 3 (que já mostrou mulheres seminuas) e grande influência na política britânicaPosiciona-se claramente no espectro liberal/esquerdista. Conhecido por seu jornalismo progressista em temas como direitos humanos, mudança climática e justiça social. Tem um modelo de financiamento que pede doações dos leitores.   
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>3º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>Revista Veja (Brasil):</Text> 
               Semanário de grande influência. Teve uma fase histórica combatendo a ditadura, mas nas últimas décadas consolidou uma linha editorial agressiva e claramente conservadora, influenciando a opinião pública.
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
});