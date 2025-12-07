import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useEffect, useState } from 'react';
import { servicos } from '../../servicos';

interface Aluno {
  id: string | number;
  nome: string;
  email: string;
  user_id?: string;
  created_at?: string;
}

export default function Turma() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = async () => {
    try {
      setLoading(true);
      setError(null);
      const resposta = await servicos.buscarTodos('alunos');
      
      if (resposta.success && resposta.data) {
        setAlunos(resposta.data);
      } else {
        setError(resposta.error || 'Erro ao buscar alunos');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar alunos');
      console.error('Erro ao buscar alunos:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <Link href="./perfilP" asChild>
          <TouchableOpacity style={styles.profileContainer} >
                <View style={styles.profilePlaceholder}>
                  <Text style={styles.profileText}>👤</Text>
               </View>
          </TouchableOpacity>
        </Link> 

        <View style={styles.repertorio}>
          <Text style={styles.text}>Professor</Text>
        </View>

        <View>
          <Text style={styles.brain}>Minha Turma</Text>
        </View>

        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000428" />
              <Text style={styles.loadingText}>Carregando alunos...</Text>
            </View>
          ) : error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity style={styles.retryButton} onPress={buscarAlunos}>
                <Text style={styles.retryButtonText}>Tentar novamente</Text>
              </TouchableOpacity>
            </View>
          ) : alunos.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum aluno cadastrado</Text>
            </View>
          ) : (
            alunos.map((aluno) => (
              <View key={aluno.id} style={styles.card}>
                <Text style={styles.cardText}>{aluno.nome || 'Sem nome'}</Text>
              </View>
            ))
          )}

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
  },
  
  scrollViewContent: {
    paddingBottom: 20, 
  },
  
  profileContainer: {
    position: 'absolute',
    top: 7,
    right: 18,
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
    top: 50,
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

  brain: {
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

  bottomSpacing: {
    height: 20, 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#000428',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});