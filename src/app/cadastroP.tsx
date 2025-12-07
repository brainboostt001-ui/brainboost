import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { useEffect, useState } from 'react';
import { servicos } from '../servicos';

const seta = require('../img/seta.png');
const google = require('../img/google.png');
const olhoAberto = require('../img/olho-aberto.png'); 
const olhoFechado = require('../img/olho-fechado.png');

export default function CadastroProfessor() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [travaEntrar, setTravaEntrar] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/'); 
    }
  };

  const cadastrarProfessor = async () => {
    if (!nome || !email || !senha || !confirmaSenha) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }

    if (senha !== confirmaSenha) {
      Alert.alert('Atenção', 'As senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      const resposta = await servicos.cadastrarUsuario(email, senha, 'P', nome);

      if (resposta.success) {
        Alert.alert(
          'Sucesso!',
          'Professor cadastrado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => {
                // Redirecionar para a tela de login
                router.replace('/loginP');
              }
            }
          ]
        );
      } else {
        Alert.alert(
          'Erro ao Cadastrar',
          resposta.error || 'Ocorreu um erro ao cadastrar o professor. Tente novamente.'
        );
      }
    } catch (error: any) {
      Alert.alert(
        'Erro ao Cadastrar',
        error.message || 'Ocorreu um erro inesperado. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!nome || !email || !senha || !confirmaSenha || senha !== confirmaSenha) {
      setTravaEntrar(true)
    } else {
      setTravaEntrar(false)
    }
  }, [nome, email, senha, confirmaSenha])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.setaContainer} onPress={handleGoBack}>
          <Image source={seta} style={styles.setaImage} />
        </TouchableOpacity>

        <View style={styles.cadastroA}>
          <Text style={styles.text}>Cadastro Professor</Text>
        </View>

        <View>
          <Text style={styles.brain}>BrainBoost</Text>
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
          <Text style={styles.label}>Nome</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            autoCapitalize="words"
            onChangeText={nome => setNome(nome)}
            value={nome}
          />
          
          <Text style={styles.label}>Email</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!mostrarSenha}
              onChangeText={senha => setSenha(senha)}
              value={senha}
            />
            <TouchableOpacity 
              style={styles.olhoButton} 
              onPress={toggleMostrarSenha}
            >
              <Image 
                source={mostrarSenha ? olhoAberto : olhoFechado} 
                style={styles.olhoImage} 
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Digite a senha novamente</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
            onChangeText={senha => setConfirmaSenha(senha)}
            value={confirmaSenha}
          />

          <TouchableOpacity
            style={[styles.button, (travaEntrar || loading) && styles.buttonDisabled]}
            onPress={cadastrarProfessor}
            disabled={travaEntrar || loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>

          <View>
            <Text style={styles.ou}>OU</Text>
          </View>
          
          <TouchableOpacity style={styles.botaoG}>
            <Text style={styles.buttonGoogle}>Google</Text>
            <Image source={google} style={styles.google} />
          </TouchableOpacity>
        </View>
        
          <Link href='../loginP' asChild>
            <TouchableOpacity style={styles.linkContainer}>
               <View>
                  <Text style={styles.cadastro}>Já tenho login</Text>
                </View>
            </TouchableOpacity>  
          </Link>
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
    height: 110, 
    backgroundColor: '#000428',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  setaContainer: {
    position: 'absolute',
    top: 18,
    left: 30,
    marginTop: 40,
    zIndex: 1,
  },
  setaImage: {
    width: 30,
    height: 30,
  },
  cadastroA: {
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
  label: {
    color: '#000428', 
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  senhaContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSenha: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingRight: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  olhoButton: {
    position: 'absolute',
    right: 15,
    padding: 10,
  },
  olhoImage: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ou: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  cadastro: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: '#000428',
    textAlign: 'center',
  },
  buttonGoogle: {
    color: '#000428',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    top: 15,
  },
  botaoG: {
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#000428',
  },
  brain: {
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
  },
  google: {
    width: 30,
    height: 30,
    right: 60,
    bottom: 12,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  linkContainer: {
    alignItems: 'center',
    width: '100%',
  },
});