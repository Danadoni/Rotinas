import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <Card 
        porcentagem = '45%' 
        titulo = 'Leitura'
        imagem ='https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg'
        Descricao ='' 
      />  
      <Card 
        porcentagem = '45%' 
        titulo = 'Leitura'
        imagem ='https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg'
        Descricao ='' 
      /> 
      
     
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});