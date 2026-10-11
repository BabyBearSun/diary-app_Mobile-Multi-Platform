import React from 'react';
import DiaryCard from '../components/DiaryCard';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const diaryEntries = [
  {
    id: 1,
    title: 'Hari Kepergianya',
    date: '2025-10-06',
    preview:
      'Setelah menghilang lebih dari 2 minggu, tanpa kami sadari ternyata dia masih ada di dekat kami, walau hanya ada raganya...',
    moodUri: 'https://picsum.photos/seed/jayen/80',
    mood: 'jayen',
    moodSource: require('../../assets/moods/jayen.png'),
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    mood: 'focused',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    mood: 'calm',
  },
  {
    id: 4,
    title: 'Hari yang Menyenangkan',
    date: '2025-10-03',
    preview:
      'Menghabiskan waktu bersama teman dan membuat banyak kenangan baru...',
    moodUri: 'https://picsum.photos/seed/excited/80',
    mood: 'excited',
  },
  {
    id: 5,
    title: 'Waktu untuk Istirahat',
    date: '2025-10-02',
    preview:
      'Beristirahat sejenak setelah kegiatan yang cukup padat hari ini...',
    moodUri: 'https://picsum.photos/seed/relax/80',
    mood: 'relaxed',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Halo, Teman Diary!</Text>
          <Text style={styles.headerTitle}>Buku Harian</Text>
        </View>

        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar/100' }}
          style={styles.avatar}
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          moodSource={entry.moodSource}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});