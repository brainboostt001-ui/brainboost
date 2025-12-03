import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function HomeProfessor() {
  
  const handleViewEssays = () => {
    router.push('../correcoes');
  };

  const handleViewRanking = () => {
    router.push('../estatisticas');
  };

  const handleViewRepertoire = () => {
    router.push('../turma');
  };

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

        
        <View style={styles.repertorio}>
          <Text style={styles.text}>Professor</Text>
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.botoesContainer}
          showsVerticalScrollIndicator={false}
        >

          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>ESTATÍSTICAS DA TURMA</Text>
            
            <View style={styles.statsRow}>
              <Text style={styles.statsLabel}>Turma:</Text>
              <Text style={styles.statsValue}>Matemática Avançada</Text>
            </View>
            
            <View style={styles.statsRow}>
              <Text style={styles.statsLabel}>Média de notas:</Text>
              <Text style={styles.statsValue}>8.5</Text>
            </View>
            
            <View style={styles.statsRow}>
              <Text style={styles.statsLabel}>Redações corrigidas:</Text>
              <Text style={styles.statsValue}>24/30</Text>
            </View>
            
            <View style={styles.statsRow}>
              <Text style={styles.statsLabel}>Temas mais envolvidos:</Text>
              <Text style={styles.statsValue}>Álgebra, Geometria</Text>
            </View>
            
            <View style={styles.statsRow}>
              <Text style={styles.statsLabel}>Alunos ativos:</Text>
              <Text style={styles.statsValue}>30</Text>
            </View>
          </View>

          {/* Últimas Redações */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>ÚLTIMAS REDAÇÕES</Text>
            <Text style={styles.cardSubtitle}>Corrigidas</Text>
            
            <View style={styles.essayItem}>
              <View style={styles.essayHeader}>
                <Text style={styles.essayName}>Paulo Freire</Text>
                <Text style={styles.essayGrade}>1000/1000</Text>
              </View>
              <Text style={styles.essayTheme}>Tema: A importância da educação matemática</Text>
              <Text style={styles.essayDate}>Corrigido em: 15/11/2023</Text>
            </View>

            <View style={styles.essayItem}>
              <View style={styles.essayHeader}>
                <Text style={styles.essayName}>Maria Silva</Text>
                <Text style={styles.essayGrade}>850/1000</Text>
              </View>
              <Text style={styles.essayTheme}>Tema: Aplicações da geometria no cotidiano</Text>
              <Text style={styles.essayDate}>Corrigido em: 14/11/2023</Text>
            </View>

            <TouchableOpacity style={styles.buttonSecondary} onPress={handleViewEssays}>
              <Text style={styles.buttonSecondaryText}>Ver Todas as Redações</Text>
            </TouchableOpacity>
          </View>

          {/* Ações Rápidas */}
          <View style={styles.actionsContainer}>
            <Link href="./correcoes" asChild> 
              <TouchableOpacity style={styles.buttonR}>
                <Text style={styles.textoR}>Redações Corrigidas</Text>
              </TouchableOpacity>
            </Link> 

            <Link href="./estatisticas" asChild> 
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Estatísticas</Text>
              </TouchableOpacity>
            </Link> 

            <Link href="./turma" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Gerenciar Turma</Text>
              </TouchableOpacity>
            </Link>

            <Link href="../ranking" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ranking da Turma</Text>
              </TouchableOpacity>
            </Link> 
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Definições responsivas
const isSmallScreen = windowHeight < 700;
const isLargeScreen = windowHeight > 800;

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
    height: isSmallScreen ? 80 : 100,
    backgroundColor: '#000428',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05, 
  },
  scrollView: {
    width: '100%',
    flex: 1,
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
  repertorio: {
    width: windowWidth * 0.5,
    maxWidth: 500,
    height: isSmallScreen ? 50 : 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000428',
    marginTop: isSmallScreen ? 35 : 40,
    marginBottom: isSmallScreen ? 15 : 20,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontSize: isSmallScreen ? windowHeight * 0.025 : windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botoesContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  card: {
    width: windowWidth * 0.9,
    maxWidth: 400,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: isSmallScreen ? 12 : 15,
    marginBottom: isSmallScreen ? 15 : 20,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: isSmallScreen ? 10 : 15,
    color: '#000428',
  },
  cardSubtitle: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: isSmallScreen ? 8 : 10,
    color: '#000428',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: isSmallScreen ? 8 : 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  statsLabel: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: '500',
    flex: 1,
  },
  statsValue: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
    color: '#000428',
    flex: 1,
    textAlign: 'right',
  },
  essayItem: {
    backgroundColor: 'white',
    padding: isSmallScreen ? 10 : 12,
    borderRadius: 8,
    marginBottom: isSmallScreen ? 8 : 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  essayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  essayName: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
    color: '#000428',
    flex: 1,
  },
  essayGrade: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  essayTheme: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#666',
    marginBottom: 2,
  },
  essayDate: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#999',
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: isSmallScreen ? 10 : 15,
  },
  button: {
    backgroundColor: '#000428',
    height: isSmallScreen ? 45 : 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isSmallScreen ? 12 : 15,
    width: windowWidth * 0.85,
    maxWidth: 340,
    marginVertical: isSmallScreen ? 5 : 8,
  },
  buttonText: {
    color: 'white',
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
  },
  buttonR: {
    backgroundColor: 'transparent',
    height: isSmallScreen ? 45 : 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: windowWidth * 0.6,
    maxWidth: 200,
    marginBottom: isSmallScreen ? 15 : 20,
    borderColor: '#000428',
    borderWidth: 2,
  },
  textoR: {
    color: '#000428',
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#f8f9fa',
    height: isSmallScreen ? 40 : 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isSmallScreen ? 10 : 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000428',
  },
  buttonSecondaryText: {
    color: '#000428',
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
  },
  bottomSpacing: {
    height: isSmallScreen ? 10 : 20,
  },
});