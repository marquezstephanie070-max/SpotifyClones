
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

type Category = {
  id: number;
  name: string;
  color: string;
};

const categories: Category[] = [
  { id: 1, name: 'Pop', color: '#D05A9D' },
  { id: 2, name: 'Hip-Hop', color: '#BA5D24' },
  { id: 3, name: 'Rock', color: '#E13300' },
  { id: 4, name: 'R&B', color: '#7358A6' },
  { id: 5, name: 'Podcasts', color: '#147D65' },
  { id: 6, name: 'Charts', color: '#4169A8' },
  { id: 7, name: 'Chill', color: '#477D56' },
  { id: 8, name: 'Mood', color: '#B85C77' },
];

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Search</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="What do you want to listen to?"
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.heading}>Browse all</Text>

      <View style={styles.grid}>
        {filteredCategories.map((category) => (
          <View
            key={category.id}
            style={[
              styles.categoryCard,
              { backgroundColor: category.color },
            ]}
          >
            <Text style={styles.categoryName}>
              {category.name}
            </Text>
          </View>
        ))}
      </View>

      {filteredCategories.length === 0 && (
        <Text style={styles.noResults}>
          No categories found.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    fontSize: 15,
    color: 'black',
    marginBottom: 25,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    height: 110,
    borderRadius: 8,
    padding: 15,
  },
  categoryName: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  noResults: {
    color: '#B3B3B3',
    textAlign: 'center',
    marginTop: 20,
  },
});
