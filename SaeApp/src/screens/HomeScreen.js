import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 SAé MMI</Text>
      <Text style={styles.subtitle}>Banque de projets BUT MMI — Meaux</Text>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#6C5CE7' }]}
        onPress={() => navigation.navigate('Liste', { filtre: null })}>
        <Text style={styles.btnText}>🗂️ Toutes les SAé</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#00b894' }]}
        onPress={() => navigation.navigate('Liste', { filtre: 'annee', valeur: 'MMI2' })}>
        <Text style={styles.btnText}>📘 SAé MMI2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#0984e3' }]}
        onPress={() => navigation.navigate('Liste', { filtre: 'annee', valeur: 'MMI3' })}>
        <Text style={styles.btnText}>📗 SAé MMI3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#e17055' }]}
        onPress={() => navigation.navigate('Liste', { filtre: 'classement' })}>
        <Text style={styles.btnText}>🏆 Classement par note</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#fd79a8' }]}
        onPress={() => navigation.navigate('Galerie')}>
        <Text style={styles.btnText}>🖼️ Galerie photos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#636e72' }]}
        onPress={() => navigation.navigate('Ajout')}>
        <Text style={styles.btnText}>➕ Ajouter une SAé</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2d3436', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#636e72', marginBottom: 32, textAlign: 'center' },
  btn: { width: '100%', padding: 16, borderRadius: 12, marginBottom: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});