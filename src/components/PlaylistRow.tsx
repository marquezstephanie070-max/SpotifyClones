
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PlaylistRowProps = {
  name: string;
  creator: string;
  image: string;
  onPress: () => void;
};

export default function PlaylistRow({
  name,
  creator,
  image,
  onPress,
}: PlaylistRowProps) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.creator}>{creator}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#B3B3B3"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  creator: {
    color: '#B3B3B3',
    fontSize: 13,
  },
});
