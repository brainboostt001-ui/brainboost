import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useState } from 'react';

const profile = require('../img/profile.png');
const lixo = require('../img/lixo.png');

const LANGUAGE_TOOL_API = 'https://api.languagetool.org/v2/check';

export default function Ranking() {
  const [essayText, setEssayText] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const checkEssay = async () => {
    if (essayText.length < 10) {
      Alert.alert('Aviso', 'Digite pelo menos 10 caracteres para corrigir a redação.');
      return;
    }

    setLoading(true);
    setShowResults(false);
    
    try {
      const formData = new URLSearchParams();
      formData.append('text', essayText);
      formData.append('language', 'pt-BR');

      const response = await fetch(LANGUAGE_TOOL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      // Se a resposta não for OK, usa análise básica
      if (!response.ok) {
        throw new Error('API indisponível');
      }

      const result = await response.json();
      
      // Processa o resultado de forma simples
      const count = result.matches ? result.matches.length : 0;
      setErrorCount(count);
      setShowResults(true);
      
      if (count === 0) {
        Alert.alert('Sucesso', '✅ Nenhum erro gramatical encontrado!');
      } else {
        Alert.alert(
          'Correção Concluída', 
          `📝 Foram encontrados ${count} ${count === 1 ? 'erro gramatical' : 'erros gramaticais'}.`
        );
      }
      
    } catch (error) {
      // Análise básica como fallback
      const basicErrors = performBasicCheck(essayText);
      setErrorCount(basicErrors);
      setShowResults(true);
      
      if (basicErrors === 0) {
        Alert.alert('Análise Básica', '✅ Nenhum erro básico encontrado! (Análise limitada)');
      } else {
        Alert.alert(
          'Análise Básica', 
          `📝 Foram encontrados ${basicErrors} ${basicErrors === 1 ? 'erro básico' : 'erros básicos'}. (Análise limitada)`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Função simples de verificação básica
  const performBasicCheck = (text: string): number => {
    let errors = 0;
    
    // Verifica se o texto termina com pontuação
    if (!text.trim().endsWith('.') && !text.trim().endsWith('!') && !text.trim().endsWith('?')) {
      errors++;
    }
    
    // Verifica parágrafos muito longos (mais de 500 caracteres)
    const paragraphs = text.split('\n');
    paragraphs.forEach(paragraph => {
      if (paragraph.trim().length > 500) {
        errors++;
      }
    });
    
    // Verifica se há pelo menos 3 frases (para textos maiores)
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
    if (text.length > 200 && sentences.length < 3) {
      errors++;
    }
    
    return errors;
  };

  const renderSimpleResults = () => {
    if (!showResults) return null;

    return (
      <View style={styles.resultsContainer}>
        {errorCount === 0 ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>🎉 Parabéns!</Text>
            <Text style={styles.successSubtext}>Sua redação está excelente!</Text>
            <Text style={styles.successDetail}>Nenhum erro gramatical encontrado.</Text>
          </View>
        ) : (
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>⚠️ Atenção</Text>
            <Text style={styles.errorCount}>Erros encontrados: {errorCount}</Text>
            <Text style={styles.errorAdvice}>
              {errorCount === 1 
                ? 'Revise o texto para corrigir o erro.' 
                : 'Revise o texto para corrigir os erros.'
              }
            </Text>
            <Text style={styles.errorTip}>
              Dica: Leia o texto em voz alta para identificar problemas.
            </Text>
          </View>
        )}
        
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Dicas para uma boa redação:</Text>
          <Text style={styles.tip}>• Verifique concordância verbal e nominal</Text>
          <Text style={styles.tip}>• Cuidado com a pontuação</Text>
          <Text style={styles.tip}>• Evite repetição de palavras</Text>
          <Text style={styles.tip}>• Mantenha a coesão textual</Text>
        </View>
      </View>
    );
  };

  const renderTextAnalysis = () => {
    if (!showResults) return null;

    const wordCount = essayText.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = essayText.length;
    const sentenceCount = essayText.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    return (
      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>📈 Análise do Texto</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{wordCount}</Text>
            <Text style={styles.statLabel}>Palavras</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{charCount}</Text>
            <Text style={styles.statLabel}>Caracteres</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{sentenceCount}</Text>
            <Text style={styles.statLabel}>Frases</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, errorCount > 0 ? styles.statError : styles.statGood]}>
              {errorCount}
            </Text>
            <Text style={styles.statLabel}>Erros</Text>
          </View>
        </View>

        <View style={styles.feedbackBox}>
          <Text style={styles.feedbackTitle}>Feedback:</Text>
          {errorCount === 0 ? (
            <Text style={styles.feedbackGood}>Excelente! Texto bem escrito.</Text>
          ) : errorCount <= 3 ? (
            <Text style={styles.feedbackMedium}>Bom! Apenas alguns ajustes necessários.</Text>
          ) : (
            <Text style={styles.feedbackBad}>Necessita de revisão atenta.</Text>
          )}
        </View>
      </View>
    );
  };

  const clearAll = () => {
    setEssayText('');
    setErrorCount(0);
    setShowResults(false);
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

        <View style={styles.textoBack}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>Redação</Text>
        </View>

        <View style={styles.essayContainer}>
          <TextInput
            style={styles.essayInput}
            multiline
            placeholder="Digite sua redação aqui..."
            placeholderTextColor="#555454ff"
            value={essayText}
            onChangeText={(text) => {
              setEssayText(text);
              setShowResults(false);
            }}
            textAlignVertical="top"
          />
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={checkEssay}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>CORRIGIR REDAÇÃO</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botaoLimpar} 
            onPress={clearAll}
          >
            <Image source={lixo} style={styles.lixoImage} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={styles.resultsScrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {renderSimpleResults()}
          {renderTextAnalysis()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isSmallScreen = windowWidth < 375;
const isLargeScreen = windowWidth > 768;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0, 
    height: windowHeight * 0.12,
    backgroundColor: '#000428',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: isSmallScreen ? 15 : 20,
  },

  profileImage: {
    width: isSmallScreen ? 25 : 30,
    height: isSmallScreen ? 25 : 30,
  },
  textoBack: {
    width: isSmallScreen ? windowWidth * 0.6 : windowWidth * 0.5,
    maxWidth: 500,
    aspectRatio: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000428',
    marginTop: isSmallScreen ? 35 : 40,
    marginBottom: isSmallScreen ? 20 : 30,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: isSmallScreen ? windowHeight * 0.025 : windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  brain: {
    padding: 0,
    fontSize: isSmallScreen ? 32 : 40,
    fontWeight: 'bold',
    marginBottom: isSmallScreen ? 15 : 20,
    textAlign: 'center',
  },
  drawerToggleContainer: {
    position: 'absolute',
    top: isSmallScreen ? 5 : 7,
    left: isSmallScreen ? 10 : 18,
    marginTop: isSmallScreen ? 35 : 40,
    zIndex: 1,
    transform: [{ scale: isSmallScreen ? 1.2 : 1.5 }],
  },
  essayContainer: {
    width: '100%',
    height: isSmallScreen ? 250 : isLargeScreen ? 350 : 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: isSmallScreen ? 15 : 20,
  },
  essayInput: {
    flex: 1,
    padding: isSmallScreen ? 12 : 15,
    fontSize: isSmallScreen ? 14 : 16,
    textAlign: 'left',
    backgroundColor: '#eeeaeaff'
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: isSmallScreen ? 8 : 10,
    marginTop: isSmallScreen ? 15 : 20,
    marginBottom: isSmallScreen ? 8 : 10,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000428',
    height: isSmallScreen ? 45 : 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: isSmallScreen ? 180 : 200,
    minHeight: 45,
  },
  botaoLimpar: {
    backgroundColor: '#8B0000',
    height: isSmallScreen ? 45 : 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: isSmallScreen ? 80 : 100,
    minHeight: 45,
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: isSmallScreen ? 12 : 14,
  },
  lixoImage: {
    width: isSmallScreen ? 20 : 24,
    height: isSmallScreen ? 20 : 24,
  },
  resultsScrollView: {
    width: '100%',
    marginTop: isSmallScreen ? 5 : 10,
  },
  scrollContent: {
    paddingBottom: isSmallScreen ? 10 : 20,
  },
  resultsContainer: {
    width: '100%',
    marginBottom: isSmallScreen ? 15 : 20,
  },
  successBox: {
    backgroundColor: '#e8f5e8',
    padding: isSmallScreen ? 15 : 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: isSmallScreen ? 12 : 15,
  },
  successText: {
    fontSize: isSmallScreen ? 18 : 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
    textAlign: 'center',
  },
  successSubtext: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#2e7d32',
    marginBottom: 5,
    textAlign: 'center',
  },
  successDetail: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#388e3c',
    textAlign: 'center',
  },
  errorBox: {
    backgroundColor: '#ffecb3',
    padding: isSmallScreen ? 15 : 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: isSmallScreen ? 12 : 15,
  },
  errorTitle: {
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    color: '#f57c00',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorCount: {
    fontSize: isSmallScreen ? 20 : 24,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorAdvice: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#e65100',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorTip: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#ff9800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  tipsContainer: {
    backgroundColor: '#e3f2fd',
    padding: isSmallScreen ? 12 : 15,
    borderRadius: 8,
  },
  tipsTitle: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: isSmallScreen ? 8 : 10,
    textAlign: 'center',
  },
  tip: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#1976d2',
    marginBottom: 3,
  },
  analysisContainer: {
    width: '100%',
    marginBottom: isSmallScreen ? 15 : 20,
  },
  analysisTitle: {
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: isSmallScreen ? 8 : 10,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: isSmallScreen ? 12 : 15,
    gap: isSmallScreen ? 5 : 8,
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: isSmallScreen ? 8 : 10,
    borderRadius: 8,
    minWidth: isSmallScreen ? 60 : 70,
    flex: 1,
  },
  statNumber: {
    fontSize: isSmallScreen ? 16 : 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statGood: {
    color: '#4caf50',
  },
  statError: {
    color: '#f44336',
  },
  statLabel: {
    fontSize: isSmallScreen ? 8 : 10,
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
  feedbackBox: {
    backgroundColor: '#f3e5f5',
    padding: isSmallScreen ? 12 : 15,
    borderRadius: 8,
  },
  feedbackTitle: {
    fontSize: isSmallScreen ? 12 : 14,
    fontWeight: 'bold',
    color: '#7b1fa2',
    marginBottom: 5,
  },
  feedbackGood: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#4caf50',
    fontWeight: '600',
  },
  feedbackMedium: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#ff9800',
    fontWeight: '600',
  },
  feedbackBad: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#f44336',
    fontWeight: '600',
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
});