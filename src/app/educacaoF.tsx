import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');
const voltar = require('../img/voltar.png');

export default function EducaçãoFilmes() {
  
  const handleVoltar = () => {
    router.replace('../filmesS');
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
            <Text style={styles.pageTitle}>Educação</Text>
            <Text style={styles.pageSubtitle}>Filmes sobre ensino e aprendizagem</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>1º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Ao Mestre com Carinho (Filme, 1967): </Text> 
              Clássico sobre um professor negro que leciona para uma turma de alunos desinteressados em uma escola de Londres. Aborda questões de disciplina, respeito e o poder transformador da educação.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>2º</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Mentes Perigosas (Filme, 1995): </Text> 
              Baseado em uma história real, mostra os desafios de uma professora em uma escola de periferia. Destaca a importância de métodos de ensino alternativos e da conexão emocional com os alunos.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>3º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>O Sorriso de Monalisa (Filme, 2003): </Text> 
              Ambientado nos anos 50, o filme mostra uma professora de história da arte que incentiva suas alunas de uma faculdade conservadora a questionarem os papéis sociais tradicionais destinados às mulheres.
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