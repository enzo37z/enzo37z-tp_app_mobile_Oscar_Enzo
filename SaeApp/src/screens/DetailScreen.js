import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function DetailScreen({ route }) {
  const { sae } = route.params;
  return (
    <ScrollView style={styles.container}>
      {sae.imageUrl && <Image source={{ uri: sae.imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.titre}>{sae.titre}</Text>
        <Text style={styles.description}>{sae.description}</Text>
        <View style={styles.infoGrid}>
          <InfoItem label="Année" value={sae.annee} />
          <InfoItem label="Semestre" value={sae.semestre} />
          <InfoItem label="Domaine" value={sae.domaine} />
          <InfoItem label="UE" value={sae.ue} />
          <InfoItem label="Note" value={`${sae.note}/20`} />
          <InfoItem label="Réussite" value={`${sae.tauxReussite}%`} />
        </View>
        <Text style={styles.label}>🎯 Compétences</Text>
        <Text style={styles.value}>{sae.competences}</Text>
        <Text style={styles.label}>👥 Auteurs</Text>
        <Text style={styles.value}>{sae.auteurs}</Text>
        <Text style={styles.label}>📅 Période</Text>
        <Text style={styles.value}>{sae.dateDebut} → {sae.dateFin}</Text>
        {sae.lienSite && (
          <TouchableOpacity style={styles.lienBtn} onPress={() => Linking.openURL(sae.lienSite)}>
            <Text style={styles.lienText}>🌐 Voir le site</Text>
          </TouchableOpacity>
        )}
        {sae.lienCode && (
          <TouchableOpacity style={[styles.lienBtn, { backgroundColor: '#2d3436' }]} onPress={() => Linking.openURL(sae.lienCode)}>
            <Text style={styles.lienText}>💻 Voir le code</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

function InfoItem({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  image: { width: '100%', height: 220, resizeMode: 'cover' },
  content: { padding: 16 },
  titre: { fontSize: 22, fontWeight: 'bold', color: '#2d3436', marginBottom: 8 },
  description: { fontSize: 14, color: '#636e72', marginBottom: 16, lineHeight: 22 },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  infoItem: { backgroundColor: '#fff', borderRadius: 8, padding: 10, minWidth: '30%', alignItems: 'center', flex: 1 },
  infoLabel: { fontSize: 11, color: '#aaa', marginBottom: 2 },
  infoValue: { fontSize: 14, fontWeight: '700', color: '#2d3436' },
  label: { fontSize: 15, fontWeight: '600', color: '#6C5CE7', marginTop: 12, marginBottom: 4 },
  value: { fontSize: 14, color: '#444', lineHeight: 20 },
  lienBtn: { backgroundColor: '#6C5CE7', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 12 },
  lienText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});