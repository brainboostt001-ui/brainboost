// App.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, router } from "expo-router";
import { FlashcardForm } from './flashcardForms';
import { FlashcardItem } from './flashcardItens';
import { Flashcard } from './flashcard';
import { LinearEasing } from 'react-native-reanimated/lib/typescript/css/easing';

export default function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleCreateFlashcard = (
    flashcardData: Omit<Flashcard, 'id' | 'dataCriacao'>
  ) => {
    const newFlashcard: Flashcard = {
      ...flashcardData,
      id: Date.now().toString(),
      dataCriacao: new Date(),
    };

    setFlashcards((prev) => [...prev, newFlashcard]);
    setShowForm(false);
  };

  const handleRemoveFlashcard = (id: string) => {
    Alert.alert(
      'Remover Flashcard',
      'Tem certeza que deseja remover este flashcard?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setFlashcards((prev) => prev.filter((card) => card.id !== id));
          },
        },
      ]
    );
  };

  const getEstatisticas = () => {
    const total = flashcards.length;
    const facil = flashcards.filter((card) => card.dificuldade === 'fácil').length;
    const medio = flashcards.filter((card) => card.dificuldade === 'médio').length;
    const dificil = flashcards.filter((card) => card.dificuldade === 'difícil').length;

    return { total, facil, medio, dificil };
  };

  const estatisticas = getEstatisticas();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      
      <View style={styles.container}>

        {/* Drawer Toggle Button */}
        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>

       <Link href="../perfilA" asChild>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profileText}>👤</Text>
          </View>
        </TouchableOpacity>
       </Link> 
       
        

        
        {!showForm && (
          <View style={styles.titulo}>
            <Text style={styles.text}>Aluno</Text>
          </View>
        )}

        
        {!showForm && (
          <View>
            <Text style={styles.brain}>FlashCard</Text>
          </View>
        )}

        
        {showForm && (
          <View style={styles.formTitleContainer}>
            <Text style={styles.formTitle}>Aluno</Text>
          </View>
        )}

        
        {showForm ? (
          <View style={styles.formWrapper}>
            <FlashcardForm 
              onSubmit={handleCreateFlashcard}
            />
          </View>
        ) : (
          <ScrollView 
            style={styles.flashcardsContainer}
            contentContainerStyle={styles.scrollContent}
          >
            {flashcards.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>
                  Nenhum flashcard criado ainda.
                </Text>
                <Text style={styles.emptyStateSubText}>
                  Clique no botão abaixo para criar seu primeiro flashcard!
                </Text>
              </View>
            ) : (
              flashcards.map((flashcard) => (
                <FlashcardItem
                  key={flashcard.id}
                  flashcard={flashcard}
                  onRemove={handleRemoveFlashcard}
                />
              ))
            )}
          </ScrollView>
        )}

        
        {!showForm && flashcards.length > 0 && (
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>Total: {estatisticas.total}</Text>
            <Text style={[styles.statsText, styles.facil]}>
              Fácil: {estatisticas.facil}
            </Text>
            <Text style={[styles.statsText, styles.medio]}>
              Médio: {estatisticas.medio}
            </Text>
            <Text style={[styles.statsText, styles.dificil]}>
              Difícil: {estatisticas.dificil}
            </Text>
          </View>
        )}

        
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowForm(!showForm)}>
          <Text style={styles.buttonText}>
            {showForm ? 'Voltar para Flashcards' : 'Criar um FlashCard'}
          </Text>
        </TouchableOpacity>
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
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  brain: {
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  formTitleContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    bottom: 11,
  },
  formWrapper: {
    width: '100%',
    marginTop: 20,
    flex: 1,
  },
  flashcardsContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 50,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsText: {
    fontSize: 12,
    fontWeight: '600',
    marginHorizontal: 4,
  },
  facil: {
    color: '#4CAF50',
  },
  medio: {
    color: '#FF9800',
  },
  dificil: {
    color: '#F44336',
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: 200,
    bottom: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});