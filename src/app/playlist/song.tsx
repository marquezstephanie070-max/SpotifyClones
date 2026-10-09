
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Song = {
  id: number;
  title: string;
  artist: string;
};

const playlistSongs: Record<string, Song[]> = {
  '1': [
    { id: 1, title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars' },
    { id: 2, title: 'BIRDS OF A FEATHER', artist: 'Billie Eilish' },
    { id: 3, title: 'Espresso', artist: 'Sabrina Carpenter' },
    { id: 4, title: 'APT.', artist: 'ROSÉ, Bruno Mars' },
    { id: 5, title: 'Good Luck, Babe!', artist: 'Chappell Roan' },
  ],

  '2': [
    { id: 1, title: 'ocean eyes', artist: 'Billie Eilish' },
    { id: 2, title: 'Snooze', artist: 'SZA' },
    { id: 3, title: 'Glue Song', artist: 'beabadoobee' },
    { id: 4, title: 'Best Part', artist: 'Daniel Caesar, H.E.R.' },
    { id: 5, title: 'Space Song', artist: 'Beach House' },
  ],

  '3': [
    { id: 1, title: 'Espresso', artist: 'Sabrina Carpenter' },
    { id: 2, title: 'Beautiful Things', artist: 'Benson Boone' },
    { id: 3, title: 'Please Please Please', artist: 'Sabrina Carpenter' },
    { id: 4, title: 'Too Sweet', artist: 'Hozier' },
    { id: 5, title: 'Lose Control', artist: 'Teddy Swims' },
  ],

  '4': [
    { id: 1, title: 'Sweater Weather', artist: 'The Neighbourhood' },
    { id: 2, title: '505', artist: 'Arctic Monkeys' },
    { id: 3, title: 'The Night We Met', artist: 'Lord Huron' },
    { id: 4, title: 'Apocalypse', artist: 'Cigarettes After Sex' },
    { id: 5, title: 'Somewhere Only We Know', artist: 'Keane' },
  ],

  '5': [
    { id: 1, title: 'Experience', artist: 'Ludovico Einaudi' },
    { id: 2, title: 'River Flows in You', artist: 'Yiruma' },
    { id: 3, title: 'Nuvole Bianche', artist: 'Ludovico Einaudi' },
    { id: 4, title: 'Clair de Lune', artist: 'Claude Debussy' },
    { id: 5, title: 'Gymnopédie No. 1', artist: 'Erik Satie' },
  ],
};


export default function PlaylistDetailsScreen() {
  const { id, name } = useLocalSearchParams<{
    id?: string;
    name?: string;
    image?: string;
  }>();

const songs = playlistSongs[id ?? ''] ?? [];
  const playlistName = name || 'My Playlist';

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={26} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={{
            uri: `https://picsum.photos/seed/playlist${id}/300`,
          }}
          style={styles.cover}
        />

        <Text style={styles.title}>{playlistName}</Text>
        <Text style={styles.subtitle}>Playlist • SpotifyClone</Text>
      </View>

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={28} color="#B3B3B3" />

        <TouchableOpacity
          style={styles.playButton}
          onPress={() =>
            Alert.alert('Play Music', 'Music playback is not available in this demo.')
          }
        >
          <Ionicons name="play" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Songs</Text>

      {songs.map((song) => (
        <TouchableOpacity
          key={song.id}
          style={styles.songRow}
          onPress={() =>
            Alert.alert(song.title, `Artist: ${song.artist}`)
          }
        >
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="#B3B3B3"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  backButton: {
    marginTop: 15,
    marginBottom: 15,
  },
  header: {
    alignItems: 'center',
  },
  cover: {
    width: 240,
    height: 240,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  playButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  artist: {
    color: '#B3B3B3',
    fontSize: 13,
    marginTop: 5,
  },
});
