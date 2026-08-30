import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Contact {
  id: string;
  name: string;
  status: string;
  avatar: string;
  isOnline: boolean;
}

const ContactsScreen: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  const [contacts, setContacts] = React.useState<Contact[]>([
    {
      id: '1',
      name: 'Иван',
      status: 'Онлайн',
      avatar: 'И',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Мария',
      status: 'Была 5 минут назад',
      avatar: 'М',
      isOnline: false,
    },
    {
      id: '3',
      name: 'Петр',
      status: 'Онлайн',
      avatar: 'П',
      isOnline: true,
    },
    {
      id: '4',
      name: 'Елена',
      status: 'Была час назад',
      avatar: 'Е',
      isOnline: false,
    },
  ]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderContact = ({ item }: { item: Contact }) => (
    <TouchableOpacity style={styles.contactItem}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.avatar}</Text>
        </View>
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactStatus}>{item.status}</Text>
      </View>
      <Icon name="message" size={24} color="#0084ff" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Поиск контактов..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {filteredContacts.length > 0 ? (
        <FlatList
          data={filteredContacts}
          renderItem={renderContact}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="person-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>Контакты не найдены</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0084ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  onlineIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#31a24c',
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  contactStatus: {
    fontSize: 13,
    color: '#65676b',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#999',
  },
});

export default ContactsScreen;
