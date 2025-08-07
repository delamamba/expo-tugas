import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const users = [
  {
    id: '1',
    name: 'Alya Anandha',
    nim: '105841105422',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105422_.jpg?1754534429',
  },
  {
    id: '2',
    name: 'Muh. Fikri Haikal Ayatullah',
    nim: '105841105522',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105522_.jpg?1754534429',
  },
  {
    id: '3',
    name: 'Muh. Dirham Rahim',
    nim: '105841105622',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105622_.jpg?1754534429',
  },
  {
    id: '4',
    name: 'Zaskya Aulia Ashar',
    nim: '105841105722',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105722_.jpg?1754534429',
  },
  {
    id: '5',
    name: 'Muh. Ilham Akbar',
    nim: '105841105822',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1754534429',
  },
  {
    id: '6',
    name: 'Zelvia',
    nim: '105841105922',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105922_.jpg?1754534429',
  },
  {
    id: '7',
    name: 'A. Difhta Rameyza K',
    nim: '105841106022',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106022_.jpg?1754534429',
  },
  {
    id: '8',
    name: 'Arsifah Ainun Aulia',
    nim: '105841106122',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106122_.jpg?1754534429',
  },
  {
    id: '9',
    name: 'Tegar Surya Prayoga',
    nim: '105841106222',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106222_.jpg?1754534429',
  },
  {
    id: '10',
    name: 'A. Angke Riona Megawan',
    nim: '105841106322',
    photo: 'https://simakad.unismuh.ac.id/upload/mahasiswa/105841106322_.jpg?1754534429',
  },
];

export default function UserPage() {
  const { id } = useLocalSearchParams();
  const user = useMemo(() => users.find((u) => u.id === id), [id]);

  if (!user) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>User tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user.photo }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.nim}>NIM: {user.nim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
    maxWidth: 350,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4a90e2',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  nim: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3f3',
  },
  errorText: {
    color: '#cc0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
