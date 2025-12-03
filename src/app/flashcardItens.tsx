// components/FlashcardItem.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { Flashcard } from './flashcard';

interface FlashcardItemProps {
  flashcard: Flashcard;
  onRemove: (id: string) => void;
}

export const FlashcardItem: React.FC<FlashcardItemProps> = ({
  flashcard,
  onRemove,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useState(new Animated.Value(0))[0];

  const flipCard = () => {
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();

    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'fácil':
        return '#4CAF50';
      case 'médio':
        return '#FF9800';
      case 'difícil':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard} activeOpacity={0.9}>
        <View style={styles.cardContainer}>
          <Animated.View
            style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
            <View style={styles.cardHeader}>
              <Text style={styles.categoria}>{flashcard.categoria}</Text>
              <View
                style={[
                  styles.dificuldadeBadge,
                  { backgroundColor: getDificuldadeColor(flashcard.dificuldade) },
                ]}>
                <Text style={styles.dificuldadeText}>
                  {flashcard.dificuldade}
                </Text>
              </View>
            </View>
            <Text style={styles.pergunta}>{flashcard.pergunta}</Text>
            <Text style={styles.instrucao}>Toque para ver a resposta</Text>
          </Animated.View>

          <Animated.View
            style={[styles.card, styles.cardBack, backAnimatedStyle]}>
            <Text style={styles.resposta}>{flashcard.resposta}</Text>
            <Text style={styles.instrucao}>Toque para voltar</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(flashcard.id)}>
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  cardContainer: {
    height: 200,
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: 'hidden',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardFront: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardBack: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoria: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  dificuldadeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dificuldadeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  pergunta: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
  },
  resposta: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
  },
  instrucao: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
  removeButton: {
    backgroundColor: '#FF6B6B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});