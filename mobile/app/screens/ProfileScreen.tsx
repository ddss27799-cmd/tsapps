import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ВА</Text>
        </View>
        <Text style={styles.name}>Ваше имя</Text>
        <Text style={styles.status}>@username</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="phone" size={24} color="#0084ff" />
          <Text style={styles.menuText}>Номер телефона</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="email" size={24} color="#0084ff" />
          <Text style={styles.menuText}>Email</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" size={24} color="#0084ff" />
          <Text style={styles.menuText}>Параметры</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="security" size={24} color="#0084ff" />
          <Text style={styles.menuText}>Безопасность</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="privacy-tip" size={24} color="#0084ff" />
          <Text style={styles.menuText}>Приватность</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <Icon name="logout" size={24} color="#ff3b30" />
          <Text style={[styles.menuText, styles.logoutText]}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0084ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#65676b',
  },
  section: {
    marginTop: 12,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginLeft: 16,
  },
  logoutButton: {
    backgroundColor: '#fff3f3',
  },
  logoutText: {
    color: '#ff3b30',
  },
});

export default ProfileScreen;
