import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"




const evolutionData = [
  { month: 'Jan', value: 75, color: '#4169E1' },
  { month: 'Fev', value: 82, color: '#6495ED' },
  { month: 'Mar', value: 68, color: '#4169E1' },
  { month: 'Abr', value: 90, color: '#6495ED' },
  { month: 'Mai', value: 85, color: '#4169E1' },
  { month: 'Jun', value: 95, color: '#6495ED' },
];

export default function MinhaEvolução() {
  
  // Encontrar o valor máximo para escalar as colunas
  const maxValue = Math.max(...evolutionData.map(item => item.value));
  
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
        

        <View style={styles.titulo}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        {/* Container do gráfico */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Desempenho Mensal</Text>
          
          <View style={styles.chart}>
            {/* Linhas de referência do gráfico */}
            <View style={styles.gridLines}>
              {[0, 25, 50, 75, 100].map((value) => (
                <View key={value} style={styles.gridLine}>
                  <Text style={styles.gridText}>{value}%</Text>
                  <View style={styles.gridLineInner} />
                </View>
              ))}
            </View>
            
            {/* Barras do gráfico */}
            <View style={styles.barsContainer}>
              {evolutionData.map((item, index) => {
                const barHeight = (item.value / maxValue) * 150; // Altura máxima de 150
                return (
                  <View key={index} style={styles.barWrapper}>
                    <View style={[styles.bar, { height: barHeight, backgroundColor: item.color }]}>
                      <Text style={styles.barValue}>{item.value}%</Text>
                    </View>
                    <Text style={styles.barLabel}>{item.month}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          
          {/* Legenda */}
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#4169E1' }]} />
              <Text style={styles.legendText}>Avaliações</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#6495ED' }]} />
              <Text style={styles.legendText}>Exercícios</Text>
            </View>
          </View>
        </View>

        {/* Botões de ação */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Exportar</Text>
          </TouchableOpacity>
        </View>

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
  
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, 
  },
  
  profileImage: {
    width: 30,
    height: 30,
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
  
  // Estilos do gráfico
  chartContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000428',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  chart: {
    flexDirection: 'row',
    height: 200,
    marginBottom: 20,
  },
  
  gridLines: {
    justifyContent: 'space-between',
    marginRight: 10,
    paddingVertical: 10,
  },
  
  gridLine: {
    alignItems: 'flex-end',
    height: 30,
  },
  
  gridLineInner: {
    width: 10,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 5,
  },
  
  gridText: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingLeft: 10,
  },
  
  barWrapper: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  
  bar: {
    width: 25,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
    minHeight: 20,
  },
  
  barValue: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 2,
    marginRight: 5,
  },
  
  legendText: {
    fontSize: 12,
    color: '#666',
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#000428',
  },
  
  secondaryButtonText: {
    color: '#000428',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
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