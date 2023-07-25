import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from './FavoriteContext';

const ContactList = () => {
  const navigation = useNavigation();
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoriteContext);

  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll()
      .then((contacts) => {
        const updatedContacts = contacts.map((contact) => ({ ...contact, isFavorite: false }));
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFavoriteToggle = (contact) => {
    const updatedContacts = contacts.map((item) => {
      if (item.recordID === contact.recordID) {
        const updatedContact = {
          ...item,
          isFavorite: !item.isFavorite,
        };

        if (updatedContact.isFavorite) {
          if (!isFavorite(contact)) {
            addToFavorites(updatedContact);
          }
          setSelectedContacts((prevSelectedContacts) => [...prevSelectedContacts, updatedContact]);
        } else {
          removeFromFavorites(updatedContact);
          setSelectedContacts((prevSelectedContacts) =>
            prevSelectedContacts.filter((selectedContact) => selectedContact.recordID !== contact.recordID)
          );
        }

        return updatedContact;
      }
      return item;
    });

    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  const handleSubmit = () => {
    if (selectedContacts.length === 0) {
      setError('Please select at least one contact.');
    } else {

      setSelectedContacts([]);
      setError('');
      navigation.navigate('FavoriteList');
    }
  };


  const searchContacts = () => {
    if (searchQuery.trim() === '') {
      setFilteredContacts(contacts);
      return;
    }

    const filteredContacts = contacts.filter((contact) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
      <View style={styles.itemContainer}>
        <CheckBox value={isFavorite(item)} onValueChange={() => handleFavoriteToggle(item)} />
        <View>
          <Text style={{fontSize:20, fontWeight: 'bold',}}>{item.displayName}</Text>
          <Text style={{fontSize:20,}}>{item.phoneNumbers[0]?.number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      
        <FlatList
          data={filteredContacts}
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
    searchContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   


    },
    searchInput: {
    backgroundColor: 'white',
    padding: 5,
    flex: 1,
    borderRadius:5,
    },
    submitButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    marginLeft: 10,
    borderRadius:5,
    },
    submitButtonText: {
    color: 'white',
    },
    errorText: {
    color: 'red',
    marginTop: 10,
    },
    itemContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    marginHorizontal:15,
    borderBottomColor: 'black',
    },
    });
    
    export default ContactList;
