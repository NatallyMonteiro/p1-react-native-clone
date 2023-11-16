import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Fontisto, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles"

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[{ flexDirection: 'row' }]}>
          <SimpleLineIcons name="menu" size={20} color="white" />
          <Text style={[styles.headerText, {fontWeight: '200', marginLeft: 8 }]}>NATALLY</Text>
        </View>

        <View style={[{ flexDirection: 'row' }]}>
          <MaterialCommunityIcons name="bell" size={24} color="white" />
          <View style={styles.profileIcon}>
          <Text style={[styles.profileText, {fontWeight: '200', marginTop: '-10%'}]}>N</Text>
          </View>
        </View>

      </View>

      <View style={styles.body}>

        <View style={{ justifyContent: 'space-between', width: '100%' }}>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, width: "95%", height: 100 }}>
            <Image source={require('../../../assets/verde.png')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, width: "95%", height: 100 }}>
            <Image source={require('../../../assets/amarelo.png')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, width: "95%", height: 100 }}>
            <Image source={require('../../../assets/azulMarinho.png')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, width: "95%", height: 100 }}>
            <Image source={require('../../../assets/azul.png')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>

        </View>
        <View style={{ width: '100%', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <TouchableOpacity style={{ alignItems: 'center', marginTop: 7, width: "25%", height: 100, justifyContent: 'center' }}>
            <Image source={require('../../../assets/rodapeHome.png')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};