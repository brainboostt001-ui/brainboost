import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { Link, router } from "expo-router";
import { useState } from 'react';
import { servicos } from '../servicos';

const seta = require('../img/seta.png');
const olhoAberto = require('../img/olho-aberto.png'); 
const olhoFechado = require('../img/olho-fechado.png');
const google = require('../img/google.png');

export default function LoginAluno() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);


  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const loginAluno = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const resposta = await servicos.loginUsuario(email, senha);

      if (resposta.success && resposta.data?.user) {
        const userType = resposta.data.user.user_metadata?.type;

        if (userType !== 'A') {
          await servicos.logoutUsuario();
          Alert.alert(
            'Acesso Negado',
            'Este login é apenas para alunos. Por favor, use a tela de login de professor.'
          );
          router.replace('/loginP')
          setLoading(false);
          return;
        }

        router.replace('/homeA');
      } else {
        Alert.alert(
          'Erro no Login',
          'Credenciais inválidas. Verifique seu email e senha.'
        );
      }
    } catch (error: any) {
      Alert.alert(
        'Erro no Login',
        error.message || 'Ocorreu um erro inesperado. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
     
      <View style={styles.background} />
      
      
      <View style={styles.container}>
        
       
        <Link href="/" asChild>
           <TouchableOpacity style={styles.setaContainer} >
             <Image source={seta} style={styles.setaImage} />
           </TouchableOpacity>
        </Link>

       
        <View style={styles.login}>
          <Text style={styles.text}>Login Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>BrainBoost</Text>
        </View>

       
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            editable={!loading}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
              editable={!loading}
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

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={loginAluno}
            disabled={loading}
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

      
        <Link href='../cadastroA' asChild>
          <TouchableOpacity >
            <View>
              <Text style={styles.cadastro}>Não tenho conta</Text>
            </View>
          </TouchableOpacity>  
        </Link>  

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
  setaContainer: {
    position: 'absolute',
    top: 10,
    left: 30,
    marginTop: 40,
    zIndex: 1,
  },
  setaImage: {
    width: 30,
    height: 30,
  },
  login: {
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
    left: 3,
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
    marginBottom: 15,
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

  google:{
    width: 30,
    height: 30,
    right: 60,
    bottom: 12,

  },
  
});