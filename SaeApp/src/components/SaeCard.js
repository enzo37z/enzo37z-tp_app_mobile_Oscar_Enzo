import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SaeCard({ sae, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {sae.imageUrl ? (
        <Image source={{ uri: sae.imageUrl }} style={styles.image} />
      ) : null}
      <View style={styles.info}>
        <Text style={styles.titre}>{sae.titre}</Text>
        <Text style={styles.meta}>{sae.annee} · {sae.domaine} · {sae.semestre}</Text>
        <View style={styles.row}>
          <Text style={styles.note}>⭐ {sae.note}/20</Text>
          <Text style={styles.taux}>✅ {sae.tauxReussite}%</Text>
        </View>
        <Text style={styles.auteurs} numberOfLines={1}>👥 {sae.auteurs}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 160, resizeMode: 'cover' },
  info: { padding: 12 },
  titre: { fontSize: 16, fontWeight: 'bold', color: '#222', marginBottom: 4 },
  meta: { fontSize: 13, color: '#666', marginBottom: 6 },
  row: { flexDirection: 'row', gap: 16, marginBottom: 4 },
  note: { fontSize: 14, color: '#f0a500', fontWeight: '600' },
  taux: { fontSize: 14, color: '#2ecc71', fontWeight: '600' },
  auteurs: { fontSize: 12, color: '#999' },
});