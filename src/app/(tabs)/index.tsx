import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

type Playlist = {
  id: number;
  name: string;
  image: string;
};

const playlists: Playlist[] = [
  {
    id: 1,
    name: 'Liked Songs',
    image: 'https://picsum.photos/seed/liked/200',
  },
  {
    id: 2,
    name: 'Chill Music',
    image: 'https://picsum.photos/seed/chill/200',
  },
  {
    id: 3,
    name: 'Top Hits',
    image: 'https://picsum.photos/seed/hits/200',
  },
  {
    id: 4,
    name: 'Daily Mix',
    image: 'https://picsum.photos/seed/daily/200',
  },
];

const playlist: Playlist[] = [
  {
    id: 1,
    name: ' Liked Songs',
    image: 'https://picsum.photos/seed/liked/200',
  },
  {
    id: 2,
    name: 'Chill Music', 
    image: 'https://picsum.photos/seed/chill/200',
  },
  {
    id: 3,
    name: 'Top Hits',
    image: 'https://picsum.photos/seed/hits/200',
  },
  {
    id: 4,
    name: 'Daily Mix',
    image: 'https://picsum.photos/seed/daily/200',
  },
];

const podcasts: Playlist[] = [
  {
    id: 5,
    name: 'Daily Podcast',
    image: 'https://picsum.photos/seed/podcast1/200',
  },
  {
    id: 6,
    name: 'Tech Talk',
    image: 'https://picsum.photos/seed/podcast2/200',
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const visiblePlaylists =
  selectedCategory === 'All'
    ? playlists
    : selectedCategory === 'Music'
    ? playlists.filter((playlist) => playlist.id <= 2)
    : [];
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good afternoon 👋</Text>
      
<View style={styles.categories}>
  {['All', 'Music', 'Podcasts'].map((category) => (
    <TouchableOpacity
      key={category}
      style={
        selectedCategory === category
          ? styles.selectedCategory
          : styles.category
      }
      onPress={() => setSelectedCategory(category)}
    >
      <Text
        style={
          selectedCategory === category
            ? styles.selectedText
            : styles.categoryText
        }
      >
        {category}
      </Text>
    </TouchableOpacity>
  ))}
</View>

      <View style={styles.playlistGrid}>
       {visiblePlaylists.map((playlist) => (
      <TouchableOpacity
         key={playlist.id}
         style={styles.playlistCard}
         onPress={() =>
            router.push({
              pathname: '/playlist/song',
              params: {
                id: playlist.id.toString(),
                name: playlist.name,
                image: playlist.image,
        },
      })
    }
  >
            <Image
              source={{ uri: playlist.image }}
              style={styles.playlistImage}
            />
            <Text style={styles.playlistName}>
              {playlist.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Made For You</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {visiblePlaylists.map((playlist) => (
          <View
            key={playlist.id}
            style={styles.recommendation}
          >
            <Image
              source={{ uri: playlist.image }}
              style={styles.recommendationImage}
            />
            <Text style={styles.recommendationText}>
              {playlist.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  greeting: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  selectedCategory: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: '#282828',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
  },
  categoryText: {
    color: 'white',
  },
  playlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  playlistCard: {
    width: '48%',
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  playlistImage: {
    width: 55,
    height: 55,
  },
  playlistName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
    flexShrink: 1,
  },
  heading: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  recommendation: {
    marginRight: 15,
    width: 145,
  },
  recommendationImage: {
    width: 145,
    height: 145,
    borderRadius: 5,
  },
  recommendationText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
