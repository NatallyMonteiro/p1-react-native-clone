import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>INSERIR CHAVE DE ACESSO</Text>
      </View>
      <View style={styles.floatBox}>
        <Text style={styles.subtitle}>Digite a sua chave de acesso</Text>
        <View style={styles.line} />

        <View style={{marginTop: '10%'}}>
        <Text style={styles.accessKey}>Chave de acesso</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity>

          <Image
            style={styles.icon} 
            source={require('../../../assets/olho.png')}
            />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci a chave de acesso</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
