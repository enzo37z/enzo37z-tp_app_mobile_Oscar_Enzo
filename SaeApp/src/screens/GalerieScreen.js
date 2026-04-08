import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { getAllSaes } from '../api/api';

const { width } = Dimensions.get('window');
const ITEM_SIZE = (width - 48) / 2;

export default function GalerieScreen() {
  const [saes, setSaes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSaes().then(data => {
      setSaes(data.filter(s => s.imageUrl));
      setLoading(false);
    });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#6C5CE7" style={{ flex: 1 }} />;

  return (
    <FlatList
      data={saes}
      numColumns={2}
      contentContainerStyle={styles.grid}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.imageUrl }} style={styles.img} />
          <Text style={styles.titre} numberOfLines={2}>{item.titre}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: { padding: 16, gap: 8 },
  item: { width: ITEM_SIZE, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', marginBottom: 8, marginRight: 8 },
  img: { width: '100%', height: ITEM_SIZE * 0.7 },
  titre: { padding: 8, fontSize: 12, color: '#444' },
});