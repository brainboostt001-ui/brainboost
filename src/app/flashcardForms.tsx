// components/FlashcardForm.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Flashcard, Dificuldade } from './flashcard';

interface FlashcardFormProps {
  onSubmit: (flashcard: Omit<Flashcard, 'id' | 'dataCriacao'>) => void;
}

export const FlashcardForm: React.FC<FlashcardFormProps> = ({ onSubmit }) => {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dificuldade, setDificuldade] = useState<Dificuldade>('médio');

  const handleSubmit = () => {
    if (!pergunta.trim() || !resposta.trim() || !categoria.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    onSubmit({
      pergunta: pergunta.trim(),
      resposta: resposta.trim(),
      categoria: categoria.trim(),
      dificuldade,
    });

    // Limpar formulário
    setPergunta('');
    setResposta('');
    setCategoria('');
    setDificuldade('médio');

    Alert.alert('Sucesso', 'Flashcard criado com sucesso!');
  };

  const dificuldades: Dificuldade[] = ['fácil', 'médio', 'difícil'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Novo Flashcard</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Pergunta</Text>
        <TextInput
          style={styles.textInput}
          value={pergunta}
          onChangeText={setPergunta}
          placeholder="Digite a pergunta..."
          multiline
          numberOfLines={3}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Resposta</Text>
        <TextInput
          style={styles.textInput}
          value={resposta}
          onChangeText={setResposta}
          placeholder="Digite a resposta..."
          multiline
          numberOfLines={3}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Categoria</Text>
        <TextInput
          style={styles.textInput}
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Ex: Matemática, História..."
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Dificuldade</Text>
        <View style={styles.dificuldadeContainer}>
          {dificuldades.map((nivel) => (
            <TouchableOpacity
              key={nivel}
              style={[
                styles.dificuldadeButton,
                dificuldade === nivel && styles.dificuldadeButtonSelected,
                {
                  backgroundColor:
                    dificuldade === nivel
                      ? nivel === 'fácil'
                        ? '#4CAF50'
                        : nivel === 'médio'
                        ? '#FF9800'
                        : '#F44336'
                      : '#F5F5F5',
                },
              ]}
              onPress={() => setDificuldade(nivel)}>
              <Text
                style={[
                  styles.dificuldadeText,
                  dificuldade === nivel && styles.dificuldadeTextSelected,
                ]}>
                {nivel}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Criar Flashcard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
   
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
    minHeight: 50,
  },
  dificuldadeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dificuldadeButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  dificuldadeButtonSelected: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dificuldadeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  dificuldadeTextSelected: {
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});