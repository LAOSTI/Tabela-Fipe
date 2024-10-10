import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../header/header'
import styles from './style'

const VehicleSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.subtitle}>Para encontrar o preço de um veículo na tabela FIPE siga as instruções abaixo:</Text>
      <Text style={styles.selectText}>Selecione o tipo de veículo</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('VehicleBrand')}
      >
        <Image source={require('../../../assets/moto.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Motocicleta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/car.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Carro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/truck.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Caminhão</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VehicleSelectionScreen;