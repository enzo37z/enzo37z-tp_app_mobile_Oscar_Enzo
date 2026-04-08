import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { addSae } from '../api/api';

export default function AjoutScreen({ navigation }) {
  const [form, setForm] = useState({
    titre: '', description: '', semestre: 'S3', domaine: 'Web',
    competences: '', dateDebut: '2024-09-01', dateFin: '2025-01-31',
    note: '', tauxReussite: '', ue: '', annee: 'MMI2',
    lienSite: '', lienCode: '', imageUrl: '', auteurs: '',
  });

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    if (!form.titre || !form.annee) {
      Alert.alert('Erreur', 'Le titre et l\'année sont obligatoires');
      return;
    }
    try {
      await addSae({ ...form, note: parseFloat(form.note), tauxReussite: parseFloat(form.tauxReussite) });
      Alert.alert('Succès', 'SAé ajoutée avec succès !', [{ text: 'OK', onPress: () => navigation.goBack() }]);
    } catch (e) {
      Alert.alert('Erreur', 'Impossible d\'ajouter la SAé');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>➕ Nouvelle SAé</Text>
      <Champ label="Titre *" value={form.titre} onChange={v => handleChange('titre', v)} />
      <Champ label="Description" value={form.description} onChange={v => handleChange('description', v)} multiline />
      <Champ label="Semestre (ex: S3)" value={form.semestre} onChange={v => handleChange('semestre', v)} />
      <Champ label="Domaine (Web, DI, 3D...)" value={form.domaine} onChange={v => handleChange('domaine', v)} />
      <Champ label="Compétences" value={form.competences} onChange={v => handleChange('competences', v)} />
      <Champ label="Date début (AAAA-MM-JJ)" value={form.dateDebut} onChange={v => handleChange('dateDebut', v)} />
      <Champ label="Date fin (AAAA-MM-JJ)" value={form.dateFin} onChange={v => handleChange('dateFin', v)} />
      <Champ label="Note (/20)" value={form.note} onChange={v => handleChange('note', v)} keyboardType="numeric" />
      <Champ label="Taux réussite (%)" value={form.tauxReussite} onChange={v => handleChange('tauxReussite', v)} keyboardType="numeric" />
      <Champ label="UE (ex: UE3)" value={form.ue} onChange={v => handleChange('ue', v)} />
      <Champ label="Année (MMI2 ou MMI3)" value={form.annee} onChange={v => handleChange('annee', v)} />
      <Champ label="Lien site" value={form.lienSite} onChange={v => handleChange('lienSite', v)} />
      <Champ label="Lien code (GitHub...)" value={form.lienCode} onChange={v => handleChange('lienCode', v)} />
      <Champ label="URL image" value={form.imageUrl} onChange={v => handleChange('imageUrl', v)} />
      <Champ label="Auteurs (séparés par virgule)" value={form.auteurs} onChange={v => handleChange('auteurs', v)} />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>✅ Enregistrer la SAé</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Champ({ label, value, onChange, multiline, keyboardType }) {
  return (
    <View style={styles.champContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && { height: 80, textAlignVertical: 'top' }]}
        value={value} onChangeText={onChange}
        multiline={multiline} keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2d3436', marginBottom: 20 },
  champContainer: { marginBottom: 12 },
  label: { fontSize: 13, color: '#636e72', marginBottom: 4, fontWeight: '500' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 12, fontSize: 14, borderWidth: 1, borderColor: '#dfe6e9' },
  btn: { backgroundColor: '#6C5CE7', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 8, marginBottom: 40 },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});