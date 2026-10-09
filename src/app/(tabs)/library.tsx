import PlaylistRow from '@/components/PlaylistRow';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Playlist = {
  id: number;
  name: string;
  creator: string;
  image: string;
};

const playlists: Playlist[] = [
  {
    id: 1,
    name: 'Liked Songs',
    creator: 'Playlist • 120 songs',
    image: 'https://picsum.photos/seed/liked/200',
  },
  {
    id: 2,
    name: 'Chill Music',
    creator: 'Playlist • Made by you',
    image: 'https://picsum.photos/seed/chill/200',
  },
  {
    id: 3,
    name: 'Top Hits',
    creator: 'Playlist • Spotify',
    image: 'https://picsum.photos/seed/hits/200',
  },
  {
    id: 4,
    name: 'Daily Mix',
    creator: 'Playlist • Spotify',
    image: 'https://picsum.photos/seed/daily/200',
  },
  {
    id: 5,
    name: 'Study Playlist',
    creator: 'Playlist • Made by you',
    image: 'https://picsum.photos/seed/study/200',
  },
];

export default function LibraryScreen() {
  const [filter, setFilter] = useState('Playlists');

  const openPlaylist = (playlist: Playlist) => {
    router.push({
      pathname: '/playlist/song',
      params: {
        id: playlist.id.toString(),
        name: playlist.name,
        image: playlist.image,
      },
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>S</Text>
        </View>

       <View style={styles.titleContainer}>
           <Text style={styles.title}>Your Library</Text>
          <Text style={styles.libraryCount}>{playlists.length} playlists</Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            Alert.alert(
              'Create Playlist',
              'This feature is not available yet.'
            )
          }
        >
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.filters}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'Playlists' && styles.activeFilter,
          ]}
          onPress={() => setFilter('Playlists')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'Playlists' && styles.activeFilterText,
            ]}
          >
            Playlists
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'Artists' && styles.activeFilter,
          ]}
          onPress={() => setFilter('Artists')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'Artists' && styles.activeFilterText,
            ]}
          >
            Artists
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentHeader}>
        <Text style={styles.recent}>Recents</Text>
        <Ionicons name="list" size={22} color="white" />
      </View>
       
      {filter === 'Playlists' ? (
        playlists.map((playlist) => (
    <PlaylistRow
      key={playlist.id}
      name={playlist.name}
      creator={playlist.creator}
      image={playlist.image}
      onPress={() => openPlaylist(playlist)}
    />
  ))
) : (
  <View style={styles.emptyContainer}>
    <Ionicons
      name="musical-notes-outline"
      size={45}
      color="#B3B3B3"
    />
    <Text style={styles.emptyText}>
      No saved artists yet.
    </Text>
  </View>
)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
  flex: 1,
},

title: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
},

libraryCount: {
  color: '#B3B3B3',
  fontSize: 13,
  marginTop: 2,
},

  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  content: {
    padding: 16,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },

  profile: {
    width: 40,
    height: 40,
    backgroundColor: '#1DB954',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  profileText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },

  addButton: {
    padding: 5,
  },

  filters: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  filterButton: {
    backgroundColor: '#282828',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },

  activeFilter: {
    backgroundColor: '#1DB954',
  },

  filterText: {
    color: 'white',
    fontSize: 14,
  },

  activeFilterText: {
    color: 'black',
    fontWeight: 'bold',
  },

  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  recent: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  playlistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  playlistImage: {
    width: 65,
    height: 65,
    borderRadius: 4,
  },

  playlistInfo: {
    marginLeft: 14,
    flex: 1,
  },

  playlistName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  creator: {
    color: '#B3B3B3',
    fontSize: 13,
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
    gap: 12,
  },

  emptyText: {
    color: '#B3B3B3',
    fontSize: 16,
  },
});
