import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [numeroSorteado, setNumeroSorteado] = useState(null);

  const SortearNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumeroSorteado(novoNumero);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitulo}>Qual o número de 1 a 100?</Text>

      <View style={styles.numeroContainer}>
        <Text style={styles.numero}>
          {numeroSorteado || '--'}
        </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={sortearNumero}>
        <Text style={styles.textoBotao}>Sortear</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>Hentura Rosalvia</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
  numeroContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 5,
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  botao: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    color: '#888',
  },
});