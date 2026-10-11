import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  moodSource,
  mood,
}) {
  return (
    <View
      style={[
        styles.card,
        mood === 'jayen' && styles.jayenCard,
        mood === 'focused' && styles.focusedCard,
        mood === 'calm' && styles.calmCard,
        mood === 'excited' && styles.excitedCard,
        mood === 'relaxed' && styles.relaxedCard,
      ]}
    >
      <Image
        source={moodSource || { uri: moodUri }}
        style={styles.mood}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.date}>{date}</Text>

        <Text
          style={styles.preview}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  jayenCard: {
    borderColor: '#f59e0b',
  },
  focusedCard: {
    borderColor: '#60a5fa',
  },
  calmCard: {
    borderColor: '#34d399',
  },
  excitedCard: {
    borderColor: '#f472b6',
  },
  relaxedCard: {
    borderColor: '#a78bfa',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});