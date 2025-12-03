import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

export default function Entregue() {
  
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

        <View style={styles.entregueContainer}>
          <Text style={styles.entregue}>ENTREGUE</Text>
        </View>

        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >

          <View style={styles.card}>
            <Text style={styles.cardNumber}>JULIO CESAR</Text>
            <Text style={styles.cardTime}>HOJE ÀS 23:54</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>JHONATA RODRIGUES</Text>
            <Text style={styles.cardTime}>SEG ÀS 18:00</Text>
          </View>

          <View style={styles.naoEntregueContainer}>
            <Text style={styles.naoEntregue}>NÃO ENTREGUE</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>PAULO EDUARDO</Text>
            <Text style={styles.cardStatusAtrasado}>ATRASADO</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>THOMAS SOUZA</Text>
            <Text style={styles.cardStatusAtrasado}>ATRASADO</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>JACKSON VITOR</Text>
            <Text style={styles.cardStatusAtrasado}>ATRASADO</Text>
          </View>

         
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
  
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    top: 50,
    
  },
  
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000428',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  cardTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E8B57',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  cardStatusAtrasado: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC143C',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  entregueContainer: {
    marginBottom: 20,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#E8F5E8',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2E8B57',
    top: 10,
  },

  entregue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2E8B57',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
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

  naoEntregueContainer: {
    marginTop: 40,
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#FFE8E8',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#DC143C',
    top: 30,
  },

  naoEntregue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#DC143C',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

