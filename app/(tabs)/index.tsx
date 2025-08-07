import { Link } from 'expo-router';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const users = [
  {
    id: '1',
    name: 'Alya Anandha',
  },
  {
    id: '2',
    name: 'Muh. Fikri Haikal Ayatullah',
  },
  {
    id: '3',
    name: 'Muh. Dirham Rahim',
  },
  {
    id: '4',
    name: 'Zaskya Aulia Ashar',
  },
  {
    id: '5',
    name: 'Muh. Ilham Akbar',
  },
  {
    id: '6',
    name: 'Zelvia',
  },
  {
    id: '7',
    name: 'A. Difhta Rameyza K',
  },
  {
    id: '8',
    name: 'Arsifah Ainun Aulia',
  },
  {
    id: '9',
    name: 'Tegar Surya Prayoga',
  },
  {
    id: '10',
    name: 'A. Angke Riona Megawan',
  },
];

export default function TabHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Daftar Mahasiswa Kelas B</Text>
      {users.map((user) => (
        
        <Link
          key={user.id}
          href={`/user/${user.id}`}
          style={styles.item}
        >
          <Ionicons name="person-circle-outline" size={24} style={styles.icon} />
          <Text style={styles.name}>{user.name}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});
