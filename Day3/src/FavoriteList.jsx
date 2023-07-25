import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from './FavoriteContext';

const FavoriteList = () => {
  const { favoriteContacts, addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoriteContext);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(favoriteContacts);

  const handleFavoriteToggle = (contact) => {
    if (isFavorite(contact)) {
      removeFromFavorites(contact);
    } else {
      addToFavorites(contact);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.contactName}>{item.displayName}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumbers[0].number}</Text>
      </View>
      <CheckBox
        style={styles.checkBox}
        value={isFavorite(item)}
        onValueChange={() => handleFavoriteToggle(item)}
      />
    </View>
  );

  const handleAddContact = () => {
    navigation.navigate('ContactList');
  };

  const searchContacts = () => {
    if (searchQuery.trim() === '') {
      setFilteredContacts(favoriteContacts);
      return;
    }

    const filteredContacts = favoriteContacts.filter((contact) => {
      const displayName = contact.displayName ? contact.displayName.toLowerCase() : '';
      const phoneNumber = contact.phoneNumbers[0]?.number ? contact.phoneNumbers[0].number.toLowerCase() : '';
      const query = searchQuery.toLowerCase();
      return displayName.includes(query) || phoneNumber.includes(query);
    });

    setFilteredContacts(filteredContacts);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    searchContacts();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <TouchableOpacity onPress={handleAddContact} style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add Contact</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={favoriteContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.recordID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    backgroundColor: 'lightgray',
    padding: 10,
    flex: 1,
    marginRight: 10,
    marginTop:5,
    borderRadius:5,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 5,
    
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    marginHorizontal:15,
    borderBottomColor: 'black',
    
  },
  contactName: {
    fontSize:    20,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 20,
    color: 'gray',
  },
  checkBox: {
    alignSelf: 'flex-end',
  },
});

export default FavoriteList;

