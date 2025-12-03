import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { useState } from 'react';

const seta = require('../img/seta.png');
const google = require('../img/google.png');
const olhoAberto = require('../img/olho-aberto.png'); 
const olhoFechado = require('../img/olho-fechado.png');

export default function CadastroAluno() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.setaContainer} onPress={handleGoBack}>
          <Image source={seta} style={styles.setaImage} />
        </TouchableOpacity>

        <View style={styles.cadastroA}>
          <Text style={styles.text}>Cadastro Aluno</Text>
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
          />
          
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!mostrarSenha}
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
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.ou}>OU</Text>
          </View>
          
          <TouchableOpacity style={styles.botaoG}>
            <Text style={styles.buttonGoogle}>Google</Text>
            <Image source={google} style={styles.google} />
          </TouchableOpacity>
        </View>
        
        <Link href='../loginA' asChild>
          <TouchableOpacity >
             <View>
                <Text style={styles.cadastro}>Já tenho login</Text>
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
});