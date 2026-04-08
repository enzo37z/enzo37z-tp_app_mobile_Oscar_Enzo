import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import SaeCard from '../components/SaeCard';
import { getAllSaes, getSaesByAnnee, getClassement } from '../api/api';

const DOMAINES = ['Tous', 'Web', 'Développement', 'DI', '3D', 'Création'];

export default function ListeScreen({ route, navigation }) {
  const [saes, setSaes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [domaineFiltré, setDomaineFiltré] = useState('Tous');
  const { filtre, valeur } = route.params || {};

  useEffect(() => { chargerSaes(); }, [filtre, valeur]);

  const chargerSaes = async () => {
    setLoading(true);
    try {
      let data;
      if (filtre === 'annee') data = await getSaesByAnnee(valeur);
      else if (filtre === 'classement') data = await getClassement();
      else data = await getAllSaes();
      setSaes(data);
    } catch (e) { console.error('Erreur chargement:', e); }
    setLoading(false);
  };

  const saesFiltrées = domaineFiltré === 'Tous' ? saes : saes.filter(s => s.domaine === domaineFiltré);

  if (loading) return <ActivityIndicator size="large" color="#6C5CE7" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtres}>
        {DOMAINES.map(d => (
          <TouchableOpacity key={d}
            style={[styles.filtrePill, domaineFiltré === d && styles.filtrePillActif]}
            onPress={() => setDomaineFiltré(d)}>
            <Text style={[styles.filtreText, domaineFiltré === d && styles.filtreTextActif]}>{d}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.compteur}>{saesFiltrées.length} SAé trouvée(s)</Text>
      <FlatList
        data={saesFiltrées}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <SaeCard sae={item} onPress={() => navigation.navigate('Detail', { sae: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  filtres: { paddingHorizontal: 12, paddingVertical: 10, maxHeight: 60 },
  filtrePill: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: '#dfe6e9', marginRight: 8 },
  filtrePillActif: { backgroundColor: '#6C5CE7' },
  filtreText: { color: '#636e72', fontSize: 13 },
  filtreTextActif: { color: '#fff', fontWeight: '600' },
  compteur: { textAlign: 'center', color: '#999', fontSize: 12, marginBottom: 4 },
});