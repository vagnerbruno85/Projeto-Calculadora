
import React from 'react';
import { View,ScrollView,StatusBar  } from 'react-native';
import Header from './src/componentes/Header';
import Footer from './src/componentes/Footer';
import Content from './src/componentes/Content';


export default function App() {
  return (
    <ScrollView>
      <View>
        <Header /> 
        <Content />
        <Footer />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

