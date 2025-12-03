import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text } from "react-native";
import { Image, SafeAreaView, View } from "react-native";

const home = require('../../img/casa.png');
const turma = require('../../img/turma.png');
const homework = require('../../img/homework.png');

export default function LayoutProfessor() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ 
                headerShown: false
            }}>
                
                <Drawer.Screen 
                    name="homeP" 
                    options={{ 
                        drawerLabel: "Home",
                        drawerIcon: () => <Image source={home} style={styles.homeImage} />
                    }}
                />

                <Drawer.Screen 
                    name="correcoes" 
                    options={{ 
                        drawerLabel: "Corrigir Redações",            
                       
                    }}
                />

                <Drawer.Screen 
                    name="estatisticas" 
                    options={{
                        drawerLabel: "Estatísticas", 
                        drawerIcon: () => <Text style={styles.drawerIcon}>📊</Text>
                    }}
                />

                <Drawer.Screen 
                    name="turma" 
                    options={{ 
                        drawerLabel: "Turma",
                        drawerIcon: () => <Image source={turma} style={styles.homeImage} />
                    }}
                />

                 <Drawer.Screen 
                    name="atividadeP" 
                    options={{ 
                        drawerLabel: "Atividades",
                        drawerIcon: () => <Image source={homework} style={styles.homeImage} />
                    }}
                />
                
                
                <Drawer.Screen 
                    name="perfilP" 
                    options={{
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />
                
                <Drawer.Screen 
                    name="index" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' } 
                    }}
                />
              
                <Drawer.Screen 
                    name="loginA" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="loginP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="cadastroA" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="cadastroP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                {/* Telas do aluno */}
                <Drawer.Screen 
                    name="homeA" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="repertorio" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="ranking" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="minhasR" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="redacao" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="flashcards" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="minhaE" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="perfilA" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

               
                <Drawer.Screen 
                    name="romantismo" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="realismo" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="prosa" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="esboço" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="poesia" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="saudeM" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="saudeP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="filmesS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="jornais" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="musicas" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="podcasts" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="raciaisM" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="raciaisP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="regional" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="economiaP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="educacaoP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="filosofia" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="negociosJ" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="politicaP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="populares" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="feminismoM" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="filosofiaP" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="literaturaB" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="tendenciosos" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="contemporanea" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="desigualdadeM" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="investigativo" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="pre-modernismo" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="saudeF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="raciaisF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="ambienteF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="distopiaF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="educaçãoF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="feminismoF" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="ambienteFilosof" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="educaçãoFilosof" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="violenciaFilosof" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="desigualdadeFilosof" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="ambienteS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="educacaoS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="sociologiaS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="sociologia" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="violenciaS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="desigualdadeS" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="crises" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="cultura" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="formacao" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="historia" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="sociaisH" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen 
                    name="_layout-professr" 
                    options={{ 
                        drawerLabel: "",
                        drawerItemStyle: { display: 'none' }
                    }}
                />

            </Drawer>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    drawerIcon: {
        fontSize: 20,
        width: 24,
        textAlign: 'center',
    },


    homeImage:{
        width: 20,
        height: 20,
    }
});