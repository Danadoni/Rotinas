import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import DATA from './data';

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>

      


    <FlatList
      data={DATA}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=> (
        <Card
        porcentagem ={item.porcentagem}
        titulo = {item.titulo}
        imagem = {item.imagem}
        descricao = {item.Descricao}


        />
  )}

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